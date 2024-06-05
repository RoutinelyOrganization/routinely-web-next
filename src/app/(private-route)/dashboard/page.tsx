import { metadata } from '@/app/layout';
import DashboardContainer from '@/components/containers/DashboardContainer';
import { makeGetTasks } from '@/factories/services/makeGetTasks';
import { TaskProvider } from '@/providers/taskProvider';

export default async function DashboardPage() {
  metadata.title = 'Routinely - Dashboard';
  const { body } = await makeGetTasks();
  const { tasks } = body;

  return (
    <TaskProvider>
      <DashboardContainer tasks={tasks} />
    </TaskProvider>
  );
}
