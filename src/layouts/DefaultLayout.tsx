// ** React
import React from 'react';

// ** Layouts
import Header from '@/layouts/components/Header/Header';
import Footer from '@/layouts/components/Footer';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default DefaultLayout;
