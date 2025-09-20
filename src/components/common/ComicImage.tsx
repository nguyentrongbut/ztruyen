// ** React
import * as React from 'react';

// ** Next
import Image, { type ImageProps } from 'next/image';

// ** class variance authority
import { cva, type VariantProps } from 'class-variance-authority';

// ** utils
import { cn } from '@/lib/utils';

const comicImageVariants = cva('aspect-[3/4] bg-black dark:bg-white/90 object-cover', {
    variants: {
        rounded: {
            default: '',
            sm: 'rounded-[2px]',
            md: 'rounded-[8px]'
        },
        size: {
            default: '',
            full: 'size-full',
        },
    },
    defaultVariants: {
        rounded: 'default',
        size: 'default',
    },
});

type ComicImageSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | '2xl' | '3xl';

interface ComicImageDimension {
    width: number;
    height: number;
}

const comicImageSizes: Record<ComicImageSize, ComicImageDimension> = {
    xs: { width: 62, height: 83 },
    sm: { width: 100, height: 240 },
    default: { width: 135, height: 180 },
    lg: { width: 180, height: 240 },
    xl: { width: 219, height: 288 },
    '2xl': { width: 240, height: 320 },
    '3xl': { width: 522, height: 300 },
};

export interface ComicImageProps
    extends ImageProps,
        VariantProps<typeof comicImageVariants> {
    imgSize?: ComicImageSize;
}

const ComicImage = React.forwardRef<HTMLImageElement, ComicImageProps>(
    ({ size, rounded, className, imgSize = 'default', ...props }, ref) => {
        const safeSize = comicImageSizes[imgSize];
        const { width, height } = safeSize;
        return (
            <Image
                ref={ref}
                width={width}
                height={height}
                sizes="(max-width: 50px) 2vw, max-width: 1920px) 100px)"
                quality="60"
                className={cn(comicImageVariants({ size, rounded, className }))}
                {...props}
            />
        );
    }
);

ComicImage.displayName = 'ComicImage';

export default ComicImage;
