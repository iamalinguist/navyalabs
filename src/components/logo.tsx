import { University } from 'lucide-react';
import type { FC } from 'react';

export const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <University className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Navya Labs
      </span>
    </div>
  );
};
