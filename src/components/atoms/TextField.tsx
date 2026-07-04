import type { InputHTMLAttributes } from 'react';
import './TextField.css';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Extra content rendered inside the field wrapper, e.g. a password toggle icon */
  trailingSlot?: React.ReactNode;
}

export default function TextField({ trailingSlot, className = '', ...rest }: TextFieldProps) {
  return (
    <div className="box-large-group">
      <input className={`box-large-input ${className}`.trim()} {...rest} />
      {trailingSlot}
    </div>
  );
}
