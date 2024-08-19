import { metadata } from '@/app/layout';
import ContainerWelcome from '@/components/containers/ContainerWelcome';

export default function WelcomePage() {
  metadata.title = 'Routinely - Boas-vindas';
  return <ContainerWelcome />;
}
