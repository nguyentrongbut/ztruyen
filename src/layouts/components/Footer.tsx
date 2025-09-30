// ** Components
import { Tag } from '@/components/common/Tag';
import Logo from '@/components/common/Logo';

// ** Configs
import { tagsFooter } from '@/configs/layout';

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="bg-secondary pt-10 pb-5 shadow-custom">
                <div className="wrapper text-white/70">
                    <div className="flex justify-between items-center gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
                            <div>
                                <Logo size='lg'/>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                {tagsFooter.map((tag) => (
                                    <Tag
                                        key={tag?.title}
                                        href={tag?.href}
                                        theme="dark"
                                    >
                                        {tag?.title}
                                    </Tag>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-1.5 text-xs">
                        <h3 className="font-semibold md:text-base text-sm">
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
                    <p className="mt-5 text-xs md:text-sm font-semibold">
                        Copyright @ {new Date().getFullYear()} Ztruyện
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
