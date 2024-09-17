import { metadata } from '@/app/layout';
import DashboardContainer from '@/components/containers/DashboardContainer';
import { TaskProvider } from '@/providers/taskProvider';

export default async function DashboardPage() {
  metadata.title = 'Routinely - Dashboard';

  return (
    <TaskProvider>
      <DashboardContainer />
    </TaskProvider>
  );
}
