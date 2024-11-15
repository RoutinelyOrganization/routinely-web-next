import { makeLogin } from '@/factories/services/makeLogin';
import type { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: {
          label: 'password',
          type: 'password',
        },
        remember: {
          label: 'remember',
          type: 'checkbox',
        },
      },
      async authorize(credentials) {
        const remember: boolean = credentials!.remember === 'true' ? true : false;

        const { body, ok } = await makeLogin({
          email: credentials!.email,
          password: credentials!.password,
          remember,
        });

        if (!ok) {
          throw new Error(body[0]);
        }

        const formattedUser = {
          token: body.token,
          refreshToken: body.refreshToken,
          expires: body.expiresIn,
          remember,
        };

        const user: User = { ...formattedUser } as any;

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return {
          ...token,
          user: session.user,
        };
      }

      if (user) {
        token = {
          user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  session: {
    updateAge: 60,
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, nextAuthOptions, handler as POST };
