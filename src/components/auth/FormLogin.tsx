'use client';

import {useState} from "react";
import {useForm} from "react-hook-form";
// import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import InputPassword from "@/components/input/InputPassword";
// import toast from "react-hot-toast";

const formSchema = z.object({
    email: z.string().email({message: 'Email không hợp lệ'}),
    password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
});

export type LoginForm = z.infer<typeof formSchema>;

const FormLogin = ({setOpenLogin}
                   : {setOpenLogin : (open: boolean) => void }
) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // const router = useRouter();

    const form = useForm<LoginForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: LoginForm) {
        setIsSubmitting(true);
        try {
            // const result = await login(values);
            //
            // if (!result || !result.success) {
            //     toast.error(result?.error || 'Đăng nhập thất bại. Vui lòng kiểm tra thông tin!');
            //     return;
            // }
            //
            // const {role} = result.data || {};
            // toast.success(result?.message || 'Đăng nhập thành công!');
            console.log(values);
            setOpenLogin(false);
            // await updateUserId?.();

            // if (role?.title !== 'admin') {
            //     router.push('/')
            // } else {
            //     router.push('/dashboard');
            // }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit((values) => onSubmit(values))}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input type="email" placeholder="Nhập email" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <InputPassword
                                    placeholder="Nhập mật khẩu"
                                    {...field}
                                ></InputPassword>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <div className="flex items-center justify-between">
                    <Link href="/forgot-password" className="text-sm text-primaryV1 hover:underline">
                        Quên mật khẩu?
                    </Link>
                </div>

                <Button type="submit" className="w-full" isLoading={isSubmitting} disabled={isSubmitting}>
                    Đăng nhập
                </Button>
            </form>
        </Form>
    )
}

export default FormLogin;
