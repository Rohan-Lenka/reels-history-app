'use client'

interface ButtonProps {
    variant: "primary" | "secondary" | "tertiary";
    text: string;
    onClick?: () => void;
    override?: string;
}

const ButtonStyle = {
    primary: `px-6 py-2 text-sm text-[#1b021b] font-bold bg-violet-300 leading-6 
            capitalize duration-200 transform rounded-sm shadow 
            cursor-pointer hover:shadow-lg hover:shadow`,
    secondary: `px-6 py-2 text-sm font-bold text-violet-300 leading-6 
            capitalize duration-200 transform rounded-sm shadow 
            border border-violet-300 cursor-pointer hover:shadow-lg`,  
    tertiary: ``
}

export default function Button({ variant, text, onClick, override }: ButtonProps) {
    return <button onClick={onClick} className={`${ButtonStyle[variant]} ${override}`}>
        {text}
    </button>
}