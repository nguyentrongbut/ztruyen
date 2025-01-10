import { ComponentProps } from 'react';

const IconMinus = (props: ComponentProps<'svg'>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            color="currentColor"
            className="size-4"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    );
};

export default IconMinus;
