import { cn } from '@/lib/utils';
import { useTasks } from '@/stores/tasks';
import { Task, TaskStatus } from '@prisma/client';
import { Loader2, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';

type TodoItemProps = {
  task: Task;
};

function TodoItem({ task }: TodoItemProps) {
  const [title, setTitle] = useState(task.title);
  const [isDeleting] = useState(false);

  const { editingId, copyWith } = useTasks();

  const handleToggleTask = (id: string) => {};

  const handleUpdateTask = (id: string, text: string) => {};

  const handleDeleteTask = (id: string) => {};

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg p-3',
        task.status === TaskStatus.DONE ? 'bg-gray-50' : 'bg-white',
      )}
    >
      <Checkbox
        checked={task.status === TaskStatus.DONE}
        onChange={() => handleToggleTask(task.id)}
      />

      {editingId === task.id ? (
        <Input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onBlur={() => {
            handleUpdateTask(task.id, title);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleUpdateTask(task.id, title);
            }
          }}
          autoFocus
        />
      ) : (
        <span className="flex-1">{task.title}</span>
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          copyWith({ editingId: task.id });
        }}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleDeleteTask(task.id)}
      >
        {isDeleting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Trash2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export default TodoItem;
