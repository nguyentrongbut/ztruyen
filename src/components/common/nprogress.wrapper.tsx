'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Suspense } from 'react'

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
    )
}

export default ProgressWrapper
