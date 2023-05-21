interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

export default function Input({ helperText, label, ...restProps }: InputProps) {
  return (
    <div className='flex flex-col gap-1 text-left text-xs'>
      {!!label && (
        <label className='font-light' htmlFor='input'>
          {label}
        </label>
      )}
      <input
        className='border w-full h-8 px-2 border-solid border-black focus:outline-none'
        id='input'
        {...restProps}
      />
      {!!helperText && <span className='text-error'>{helperText}</span>}
    </div>
  );
}
