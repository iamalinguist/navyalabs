import { University } from 'lucide-react';
import type { FC } from 'react';

export const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <University className="h-8 w-8 text-primary" />
      <div>
        <span className="text-xl font-bold tracking-tight text-foreground block leading-tight">
          Navya Labs
        </span>
        <span className="text-xs text-muted-foreground block leading-tight">
          An IITians' Venture
        </span>
      </div>
    </div>
  );
};
