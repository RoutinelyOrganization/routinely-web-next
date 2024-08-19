import { metadata } from '@/app/layout';
import ContainerLogin from '@/components/containers/ContainerLogin';

export default function Login() {
  metadata.title = 'Routinely - Login';
  return <ContainerLogin />;
}
