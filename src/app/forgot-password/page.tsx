import ContainerForgotPassword from '@/components/containers/ContainerForgotPassword';
import { metadata } from '../layout';

export default function ForgotPasswordPage() {
  metadata.title = 'Routinely - Esqueceu sua senha?';
  return <ContainerForgotPassword />;
}
