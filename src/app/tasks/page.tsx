import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { listTasks } from './_actions';
import NewTodo from './_components/new-todo';
import TaskList from './_components/task-list';

async function Page() {
  const tasks = await listTasks();
  return (
    <>
      <Card className="mx-auto min-h-[calc(100vh-10rem)] max-w-5xl">
        <CardHeader className="border-b text-center font-quicksand font-bold">
          <CardTitle>Lista de Tarefas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <NewTodo />

          <div className="space-y-2">
            <TaskList taskList={tasks} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Page;
