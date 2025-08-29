import {Eye, EyeOff} from "lucide-react";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";

type InputPasswordProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    name?: string;
};

const InputPassword: React.FC<InputPasswordProps> =
    ({
         placeholder,
         value,
         onChange,
         onBlur,
         name
    }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="relative">
            <Input
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />
            <div
                className="absolute right-0 top-0 h-full p-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
            </div>
        </div>
    )
}

export default InputPassword