'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createTask } from '../_actions';
import { createTaskSchema } from '../_schemas';

function NewTodo() {
  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await createTask(data);
    form.reset();
  });

  return (
    <div className="flex w-full">
      <Form {...form}>
        <form className="flex w-full gap-2" onSubmit={onSubmit}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input
                    className="w-full rounded-lg"
                    type="text"
                    placeholder="Adicionar nova tarefa"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="flex-none rounded-lg" type="submit">
            Adicionar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default NewTodo;
