'use client';

import { makeAuthorization } from '@/factories/services/makeAuthorization';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const useRefreshSession = async () => {
  const { data: session, update } = useSession();
  const now = new Date().getTime();
  const expires = new Date((session?.user as any)?.expires).getTime();
  const isExpired = now > Number(expires);

  useEffect(() => {
    if (isExpired) {
      (async () => {
        const { status, body } = await makeAuthorization(
          session?.user.token!,
          session?.user.refreshToken!,
        );

        if (status !== 200) {
          signOut({ callbackUrl: '/login' });
          return;
        }

        await update({
          ...session,
          user: {
            token: body.token,
            refreshToken: body.refreshToken,
            expires: body.expiresIn,
          },
          expires: new Date(body.expiresIn).getTime().toString(),
        });
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.refreshToken, session?.user.token]);
};
