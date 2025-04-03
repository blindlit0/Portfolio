interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button 
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors ${className || ''}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}
  