// ** React
import * as React from 'react';

// ** Next
import Link from 'next/link';

// ** class variance authority
import { cva, type VariantProps } from 'class-variance-authority';

// ** utils
import { cn } from '@/lib/utils';

const headingVariants = cva('line-clamp-1', {
    variants: {
        textColor: {
            default: '',
            white: 'text-white',
        },
        size: {
            sm: 'text-sm',
            default: 'text-base',
            lg: 'text-lg',
            lgResponsive: 'text-[14px] sm:text-base md:text-lg',
            xl: 'text-xl',
            '2xl': 'pt-[20px] pb-[16px] text-[22px] font-medium \
            sm:pt-[30px] sm:pb-[20px] sm:text-[26px] \
            md:pt-[40px] md:pb-[28px] md:text-[30px] \
            lg:pt-[60px] lg:pb-[38px] lg:text-[34px]',
            '3xl': 'lg:text-3xl'
        },
        type: {
            default: '',
            capitalize: 'capitalize',
            textFull: 'line-clamp-none sm:line-clamp-2'
        },
        fontWeight: {
            default: '',
            medium: 'font-medium',
            semibold: 'font-semibold',
        },
    },
    defaultVariants: {
        textColor: 'default',
        size: 'default',
        type: 'default',
        fontWeight: 'default',
    },
});

type AsProp<T extends React.ElementType> = {
    as?: T;
};

export type HeadingProps<T extends React.ElementType = React.ElementType> =
    AsProp<T> &
        VariantProps<typeof headingVariants> & {
            href?: string;
            title: string;
            link?: boolean;
        } & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'title' | 'href'>;

const Heading = <T extends React.ElementType = 'h1'>({
    textColor,
    size,
    type,
    fontWeight,
    href,
    title,
    as,
    className,
    link = true,
    ...props
}: HeadingProps<T>) => {
    const Comp = as || 'h1';

    return (
        <Comp
            className={cn(
                headingVariants({ textColor, size, type, fontWeight, className })
            )}
            title={title}
            {...props}
        >
            {link && href ? <Link href={href}>{title}</Link> : <>{title}</>}
        </Comp>
    );
};

Heading.displayName = 'Heading';

export { Heading, headingVariants };
