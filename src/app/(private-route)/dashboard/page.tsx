import DashboardContainer from '@/components/containers/DashboardContainer';
import { makeGetTasks } from '@/factories/services/makeGetTasks';
import { TaskProvider } from '@/providers/taskProvider';

export default async function DashboardPage() {
  const { body } = await makeGetTasks();
  const { tasks } = body;

  return (
    <TaskProvider>
      <DashboardContainer tasks={tasks} />
    </TaskProvider>
  );
}
