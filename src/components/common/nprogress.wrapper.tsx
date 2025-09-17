'use client';

// ** React
import { Suspense } from 'react';

// ** next progress bar
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Suspense>
                <ProgressBar
                    height="2px"
                    color="var(--primaryColor)"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
            </Suspense>
        </>
    );
};

export default ProgressWrapper;
