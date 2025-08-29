'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FormLogin from '@/components/auth/FormLogin';
import FormRegister from '@/components/auth/FormRegister';
import { useAuthDialog } from '@/contexts/AuthDialogContext';
import { useState } from 'react';
import Image from 'next/image';

const DialogCta = () => {
    const { openLogin, setOpenLogin } = useAuthDialog();
    const [tab, setTab] = useState('login');

    return (
        <div className="flex items-center justify-center gap-4">
            <Dialog open={openLogin} onOpenChange={setOpenLogin}>
                <DialogTrigger asChild>
                    <button>Đăng nhập</button>
                </DialogTrigger>
                <DialogContent className="p-0">
                    <div className="relative px-6 py-10 overflow-hidden sm:rounded-lg">
                        <DialogHeader>
                            <Tabs
                                defaultValue="login"
                                value={tab}
                                onValueChange={setTab}
                            >
                                <TabsList className="gap-12">
                                    <DialogTitle>
                                        <TabsTrigger
                                            value="login"
                                            className="text-base font-semibold"
                                        >
                                            Đăng nhập
                                        </TabsTrigger>
                                    </DialogTitle>
                                    <DialogTitle>
                                        <TabsTrigger
                                            value="register"
                                            className="text-base font-semibold"
                                        >
                                            Đăng ký
                                        </TabsTrigger>
                                    </DialogTitle>
                                </TabsList>
                                <TabsContent
                                    value="login"
                                    className="mt-4 w-full lg:w-[336px] mx-auto"
                                >
                                    <FormLogin setOpenLogin={setOpenLogin} />
                                </TabsContent>
                                <TabsContent
                                    value="register"
                                    className="mt-4 w-full lg:w-[336px] mx-auto"
                                >
                                    <FormRegister setTab={setTab} />
                                </TabsContent>
                            </Tabs>
                        </DialogHeader>
                        <div className="absolute hidden lg:block -left-2 top-1.5 rotate-90 ">
                            <Image
                                src="/auth-left.png"
                                alt="ztruyen img auth left"
                                width={128}
                                height={116}
                            />
                        </div>
                        <div className="absolute right-0 bottom-0">
                            <Image
                                src="/auth-right.png"
                                alt="ztruyen img auth right"
                                width={128}
                                height={116}
                            />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DialogCta;
