// ** React hot toast
import { Toaster } from 'react-hot-toast';

const ToasterCustom = () => {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                className:
                    '!bg-primaryColor !text-white px-4 py-2',
                duration: 3000,

                success: {
                    className: '!text-xs !bg-primaryColor !text-white ',
                    icon: '(=^･ｪ･^=)/',
                },

                error: {
                    className: '!text-xs !bg-primaryColor !text-white ',
                    icon: '(=ＴェＴ=)',
                },
            }}
        />
    )
}

export default ToasterCustom;
