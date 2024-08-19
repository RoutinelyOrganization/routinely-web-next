import ContainerNewPassword from '@/components/containers/ContainerNewPassword';
import { metadata } from '../layout';

export default function NewPasswordPage() {
  metadata.title = 'Routinely - Criar nova senha';
  return <ContainerNewPassword />;
}
