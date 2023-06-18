import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Adicione quaisquer propriedades personalizadas que você desejar
  customProp?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, customProp, ...rest }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
