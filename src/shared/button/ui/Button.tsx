import s from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    color?: "primary" | "danger";
};

export function Button({ children, onClick, color = "primary" }: ButtonProps) {
    const className = `${s.button} ${s[color]}`;
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
