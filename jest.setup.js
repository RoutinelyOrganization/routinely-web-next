/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom';
import { useTaskMock } from './mocks/useTaskContextMock';
export const useRouter = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

export const mockUseRouter = props => {
  useRouter.mockImplementation(() => ({
    basePath: props.basePath || '',
    pathname: props.pathname || '/mock-path',
    route: props.route || '/mock-route',
    asPath: props.asPath || '',
    push: props.push || jest.fn(),
    replace: props.replace || jest.fn(),
    reload: props.reload || jest.fn(),
    back: props.back || jest.fn(),
  }));
};

// **Global Mocks**
// Due to Jest transformer issues, we mock next-auth's useSession hook directly:
export const mockSession = {
  expires: new Date(Date.now() + 2 * 86400).toISOString(),
  user: { name: 'admin' },
};
jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => ({
      data: mockSession,
      status: 'authenticated',
    })),
  };
});
// Reference: https://github.com/nextauthjs/next-auth/discussions/4185#discussioncomment-2397318
// We also need to mock the whole next-auth package, since it's used in
// our various pages via the `export { getServerSideProps }` function.
jest.mock('next-auth', () => ({
  __esModule: true,
  default: jest.fn(),
  unstable_getServerSession: jest.fn(
    () =>
      new Promise(resolve => {
        resolve({
          expiresIn: undefined,
          loggedInAt: undefined,
          someProp: 'someString',
        });
      }),
  ),
}));
// Reference: https://github.com/nextauthjs/next-auth/issues/4866

jest.mock('next/image', () => {
  return function MockedImage(props) {
    return <img src={props.src} alt={props.alt} {...props} />;
  };
});

jest.mock('@/components/calendar', () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock('@/hooks/useTask', () => ({
  useTask: () => useTaskMock(),
}));

// beforeEach(() => {
//   useTaskMock.mockClear();
// });
