import media from '@/styles/mediaQueries';
import { colors, fonts } from '@/styles/variables';
import Link from 'next/link';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;

  ${media.tablet} {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ShowPassword = styled.span`
  cursor: pointer;
  font-size: ${fonts.sizes.xxxsmall};

  > img {
    position: relative;
    top: -4px;
  }
`;
export const CheckboxAndForgetPasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 4px;
  > label {
    font-size: ${fonts.sizes.xxxsmall};
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    cursor: pointer;
  }
`;
export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ForgetPassword = styled.span`
  font-size: ${fonts.sizes.xxxsmall};
  line-height: 1rem;
  letter-spacing: 0.5px;
  text-align: left;
  text-decoration: none;
  color: ${colors.black};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  margin-top: 16px;

  ${media.desktop} {
    flex-direction: row;
  }

  ${media.tablet} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const LinkNext = styled(Link)`
  font-size: ${fonts.sizes.xxxsmall};
  line-height: 16px;
  color: ${colors.black};
  margin-left: 4.8px;
`;
