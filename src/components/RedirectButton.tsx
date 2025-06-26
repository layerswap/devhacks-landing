import React from 'react';
import { useRouter } from 'next/router';

interface RedirectButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ to, children, className }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default RedirectButton;