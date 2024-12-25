'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressWrapper = ({ children } : {children: React.ReactNode}) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#32aaff"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressWrapper;