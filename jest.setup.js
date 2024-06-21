/* eslint-disable @next/next/no-img-element */
import '@testing-library/jest-dom';

jest.mock('next/image', () => {
  const MockedImage = () => <img src="mocked-icon.svg" alt="Mocked Icon" />;
  return MockedImage;
});
