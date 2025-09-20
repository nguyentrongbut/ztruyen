// ** React
import * as React from 'react';

// ** Next
import Link from 'next/link';
import Image from 'next/image';

// ** class variance authority
import { cva, type VariantProps } from 'class-variance-authority';

// ** utils
import { cn } from '@/lib/utils';

const logoVariants = cva(
    'font-bold first-letter:uppercase first-letter:text-primaryColor',
    {
        variants: {
            size: {
                default: 'text-[15px] first-letter:text-xl',
                lg: 'text-lg md:text-[25px] first-letter:text-2xl md:first-letter:text-4xl',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

const logoSizes: Record<'default' | 'lg', { width: number; height: number }> = {
    default: { width: 32, height: 32 },
    lg: { width: 50, height: 50 },
};

const websiteName = 'ztruyện';

export interface LogoProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof logoVariants> {}

const Logo = React.forwardRef<HTMLParagraphElement, LogoProps>(
    ({ className, size = 'default', ...props }, ref) => {
        const safeSize = (size ?? 'default') as 'default' | 'lg';
        const { width, height } = logoSizes[safeSize];
        return (
            <Link href="/" className="inline-flex items-center">
                <Image
                    src='/logo.png'
                    width={width}
                    height={height}
                    alt={websiteName}
                    priority
                />
                <p
                    ref={ref}
                    className={cn(logoVariants({ size }), className)}
                    {...props}
                >
                    {websiteName}
                </p>
            </Link>
        );
    }
);

Logo.displayName = 'Logo';

export default Logo;
