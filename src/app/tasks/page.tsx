import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NewTodo from './_components/new-todo';

function Page() {
  return (
    <>
      <Card className="mx-auto min-h-[calc(100vh-10rem)] max-w-5xl">
        <CardHeader className="font-quicksand border-b text-center font-bold">
          <CardTitle>Lista de Tarefas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <NewTodo />

          <div className="space-y-2"></div>
        </CardContent>
      </Card>
    </>
  );
}

export default Page;
