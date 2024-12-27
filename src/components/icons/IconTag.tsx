import { ComponentProps } from "react";

const IconTag = (props: ComponentProps<"svg">) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
            {...props}
        >
            <title>Nhãn</title>
            <path
                d="M4.5,2.8h6.59a1.7,1.7,0,0,1,1.2.5l9,9a1.7,1.7,0,0,1,0,2.4L14.7,21.29a1.7,1.7,0,0,1-2.4,0l-9-9a1.7,1.7,0,0,1-.5-1.2V4.5A1.7,1.7,0,0,1,4.5,2.8Zm0,1.4a.29.29,0,0,0-.3.3v6.59a.29.29,0,0,0,.09.21l9,9a.29.29,0,0,0,.42,0l6.59-6.59a.29.29,0,0,0,0-.42l-9-9a.29.29,0,0,0-.21-.09ZM9,11.7A2.7,2.7,0,1,1,11.7,9,2.7,2.7,0,0,1,9,11.7Zm0-1.4A1.3,1.3,0,1,0,7.7,9,1.3,1.3,0,0,0,9,10.3Z"
            />
        </svg>
    );
};

export default IconTag;
