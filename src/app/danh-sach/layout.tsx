// ** React
import React from 'react';

// ** Layout
import DefaultLayout from '@/layouts/DefaultLayout';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return <DefaultLayout>{children}</DefaultLayout>;
};

export default Layout;
