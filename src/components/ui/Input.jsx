const Input = ({
  label,
  wrapperClassName,
  inputClassName,
  labelClassName,
  ...props
}) => {
  return (
    <label className={`relative block text-sm ${wrapperClassName}`}>
      <input
        {...props}
        placeholder=""
        type="text"
        className={`peer w-full border border-black-400 px-3 pt-5 pb-2 rounded-xl outline-none ${inputClassName}`}
      />
      <div
        className={`${labelClassName} absolute left-1 top-0.5 text-xs transition-all px-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-xs`}
      >
        {label}
      </div>
    </label>
  );
};

export default Input;
