'use client';

import {z} from "zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import InputPassword from "@/components/input/InputPassword";
import Link from "next/link";
import {Checkbox} from "@/components/ui/checkbox";
// import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(4, 'Tên phải có ít nhất 4 ký tự'),
    full_name: z.string().min(4, 'Họ và tên phải có ít nhất 4 ký tự'),
    email: z.string().email('Email không hợp lệ'),
    password: z.string()
        .min(12, 'Mật khẩu phải có ít nhất 12 ký tự')
        .regex(/[^A-Za-z0-9]/, 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt')
        .regex(/[A-Z]/, 'Mật khẩu phải chứa ít nhất một chữ in hoa'),
    confirmPassword: z.string().min(1, 'Vui lòng xác nhận mật khẩu'),
    acceptTerms: z.boolean().refine(val => val === true, {message: "Bạn phải đồng ý với điều khoản"}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không trùng khớp",
    path: ["confirmPassword"],
});

export type RegisterForm = z.infer<typeof formSchema>;

const FormRegister = ({setTab}
                      : { setTab?: (value: string) => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<RegisterForm>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            full_name: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
    });

    async function onSubmit(values: RegisterForm) {
        setIsSubmitting(true);
        try {
            // const result = await register(values);
            // if (!result.success) {
            //     toast.error(result.error || 'Đăng ký thất bại. Vui lòng kiểm tra lại.');
            //     return;
            // }
            // toast.success(result.data?.message || 'Đăng ký thành công! Vui lòng đăng nhập.');
            console.log(values);
            setTab?.("login");
        } catch (error) {
            console.error("Lỗi khi đăng ký:", error);
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
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="Nhập tên" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="full_name"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="Nhập họ và tên" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Nhập email"
                                    {...field}
                                ></Input>
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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <InputPassword
                                    placeholder="Xác nhận mật khẩu"
                                    {...field}
                                ></InputPassword>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({field}) => (
                        <FormItem>
                            <div className="flex items-center gap-2">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className="text-sm flex flex-wrap gap-y-0">
                                    Tôi đồng ý với
                                    <Link href="/terms" className="text-primaryV1 hover:underline mx-1">
                                        Điều khoản và Điều kiện
                                    </Link>
                                </FormLabel>
                            </div>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting} disabled={isSubmitting}>
                    Đăng ký
                </Button>
            </form>
        </Form>
    )
}

export default FormRegister;
