import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    asChild?: boolean,
    className?: string
}

export function Button({ children, asChild, className, ...props }: IButtonProps) {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp className={
            clsx(
                'flex justify-center items-center gap-2 bg-blue-dark border-none rounded-lg cursor-pointer flex-none order-1 flex-grow-0 h-14 w-24 text-gray-100 hover:bg-blue-normal',
                className
            )
        }
            {...props}
        >
            {children}
        </Comp>
    )
}
