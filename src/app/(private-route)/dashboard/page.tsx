import DashboardContainer from '@/components/containers/DashboardContainer';
import { TaskProvider } from '@/contexts/TaskContext';
import { makeGetTasks } from '@/services/factories/makeGetTasks';

export default async function DashboardPage() {
  const { body } = await makeGetTasks();
  const { tasks } = body;

  return (
    <TaskProvider>
      <DashboardContainer tasks={tasks} />
    </TaskProvider>
  );
}
