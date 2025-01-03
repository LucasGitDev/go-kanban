import { Task } from '@prisma/client';
import { create } from 'zustand';

type Props = {
  editingId: string | null;
  tasks: Task[];
};

type ActionsProps = {
  copyWith: (props: Partial<Props>) => void;
};

type StoreProps = Props & ActionsProps;

export const useTasks = create<StoreProps>()((set) => ({
  editingId: null,
  tasks: [],
  copyWith: (props) => set({ ...props }),
}));
