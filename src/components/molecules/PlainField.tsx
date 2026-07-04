import type { InputHTMLAttributes } from 'react';

interface PlainFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * Unstyled field used in the admin section, mirroring the original plain HTML
 * forms (no design pass applied there, per project scope).
 */
export default function PlainField({ label, id, ...rest }: PlainFieldProps) {
  const fieldId = id ?? rest.name;
  return (
    <>
      <label htmlFor={fieldId}>{label}</label>
      <input id={fieldId} {...rest} />
      <br />
    </>
  );
}
