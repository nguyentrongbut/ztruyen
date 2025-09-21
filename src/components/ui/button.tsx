import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer outline-none',
    {
        variants: {
            variant: {
                primary:
                    'bg-primaryColor text-primary hover:bg-primaryColor/90',
                default: '',
                outline:
                    'border rounded-[3px] text-secondary text-sm text-left hover:bg-accent hover:text-accent-foreground',
                ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
                lightOpacity: 'bg-white/80',
                darkOpacity: 'bg-black/50',
                dark: 'bg-black/60 text-white ',
                danger: 'bg-red-400 text-white'
            },
            shape: {
                pill: 'text-xs px-4 py-2 rounded-full',
                default: 'h-auto px-5 py-2.5',
                rectangleSmall: 'text-sm px-1 md:px-5',
                verticalRectangle: 'w-8 h-20 rounded-none',
                circle: 'size-12 sm:size-[60px] md:size-[64px] lg:size-[74px] rounded-full',
                squareRounded: 'size-10',
            }
        },
        defaultVariants: {
            variant: 'default',
            shape: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, shape, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, shape, className })
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
