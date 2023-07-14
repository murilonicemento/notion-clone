import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-800 hover:bg-zinc-200 transition-colors data-[isActive=true]:text-blue-500"
      {...props}
    />
  );
}
