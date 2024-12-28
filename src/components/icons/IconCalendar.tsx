import { ComponentProps } from "react";

const IconCalendar = (props: ComponentProps<"svg">) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            {...props}
        >
            <title>Lịch</title>
            <path
                d="M16.2,3.3h3.3A1.7,1.7,0,0,1,21.2,5V19.5a1.7,1.7,0,0,1-1.7,1.7H4.5a1.7,1.7,0,0,1-1.7-1.7V5A1.7,1.7,0,0,1,4.5,3.3H7.8V2.5a.7.7,0,0,1,1.4,0v.8h5.6V2.5a.7.7,0,1,1,1.4,0Zm0,1.4V6a.7.7,0,0,1-1.4,0V4.7H9.2V6A.7.7,0,0,1,7.8,6V4.7H4.5a.29.29,0,0,0-.3.3V8.3H19.8V5a.29.29,0,0,0-.3-.3Zm3.6,5H4.2v9.8a.29.29,0,0,0,.3.3h15a.29.29,0,0,0,.3-.3ZM8,13.7a.7.7,0,0,1,0-1.4h8a.7.7,0,0,1,0,1.4Zm1.5,3.5a.7.7,0,0,1,0-1.4h5a.7.7,0,0,1,0,1.4Z"
            />
        </svg>
    );
};

export default IconCalendar;
