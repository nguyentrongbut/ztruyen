import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="mt-[60px] fixed bottom-0 left-0 w-full">
            <div className="bg-secondary pt-10 pb-5 shadow-custom">
                <div className="wrapper text-white/70">
                    <div className="flex justify-between">
                        <div className="flex gap-[30px] items-center">
                            <Link href="/">
                                <span className="block text-[25px] font-medium first-letter:uppercase first-letter:text-[#32aaff] first-letter:text-4xl">
                                    Ztruyện
                                </span>
                            </Link>
                            <div className="flex flex-wrap text-sm gap-[30px]">
                                <Link href="/" className="">
                                    Giới thiệu
                                </Link>
                                <Link href="/" className="">
                                    Liên hệ
                                </Link>
                                <Link href="/" className="">
                                    Điều khoản
                                </Link>
                                <Link href="/" className="">
                                    Chính sách bảo mật
                                </Link>
                            </div>
                        </div>
                        <div className="w-[1px] bg-white/70 mx-8"></div>
                        <div className="text-xs flex flex-col gap-1">
                            <h3 className="font-semibold text-base">
                                Liên hệ đặt quảng cáo
                            </h3>
                            <p className="mt-0.5">
                                Email :
                                <Link
                                    href="mailto:ree6i6x@gmail.com"
                                    className="ml-1"
                                >
                                    <i>ree6i6x@gmail.com</i>
                                </Link>
                            </p>
                            <p>Vui lòng gửi email cho chúng tôi</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-1.5 text-xs">
                        <h3 className="font-semibold text-base">
                            Miễn trừ trách nhiệm
                        </h3>
                        <p className="mt-0.5">
                            Trang web này cung cấp nội dung truyện tranh chỉ với
                            mục đích giải trí và <b> không chịu trách nhiệm </b>{' '}
                            về bất kỳ nội dung quảng cáo, liên kết của bên thứ
                            ba hiển thị trên trang web của chúng tôi.
                        </p>
                        <p>
                            Tất cả thông tin và hình ảnh trên website đều được
                            thu thập từ internet. Chúng tôi không chịu trách
                            nhiệm về bất kỳ nội dung nào. Nếu bạn hoặc tổ chức
                            của bạn có vấn đề gì liên quan đến nội dung hiển thị
                            trên website, vui lòng liên hệ với chúng tôi để được
                            giải quyết.
                        </p>
                    </div>
                    <p className="mt-5 text-sm font-medium">
                        Copyright @ {new Date().getFullYear()} Ztruyện
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
