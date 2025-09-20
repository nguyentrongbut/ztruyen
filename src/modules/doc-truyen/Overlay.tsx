// ** React
import React from 'react';

const Overlay = ({
    children,
    isModalOpen,
}: {
    children: React.ReactNode;
    isModalOpen: boolean;
}) => {
    return (
        <div
            className={`fixed inset-0 bg-white/5 transition-opacity duration-500 ease-in-out ${
                isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            {children}
        </div>
    );
};

export default Overlay;
