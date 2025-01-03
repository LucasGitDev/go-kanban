'use client';

import TodoItem from '@/components/internal/todo-item';
import { useTasks } from '@/stores/tasks';
import { Task } from '@prisma/client';
import { useEffect } from 'react';

type TaskListProps = {
  taskList: Task[];
};

function TaskList({ taskList }: TaskListProps) {
  const { tasks, copyWith } = useTasks();

  useEffect(() => {
    copyWith({ tasks: taskList });
  }, [taskList]);

  return (
    <div className="space-y-2">
      {(!tasks || tasks.length === 0) && <p>Nenhuma tarefa encontrada</p>}
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
