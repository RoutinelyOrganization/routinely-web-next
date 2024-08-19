import { metadata } from '@/app/layout';
import ContainerSignUp from '@/components/containers/ContainerSignup';

export default function SignUpPage() {
  metadata.title = 'Routinely - Crie sua conta';
  return <ContainerSignUp />;
}
