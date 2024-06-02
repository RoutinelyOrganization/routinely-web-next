import DashboardContainer from '@/components/containers/DashboardContainer';
import { TaskProvider } from '@/contexts/TaskContext';

export default function DashboardPage() {
  return (
    <TaskProvider>
      <DashboardContainer />
    </TaskProvider>
  );
}
