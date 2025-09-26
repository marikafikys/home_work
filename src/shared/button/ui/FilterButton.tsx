import s from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export function FilterButton({ children, onClick }: ButtonProps) {
    const className = `${s.button} ${s.primary}`;
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
