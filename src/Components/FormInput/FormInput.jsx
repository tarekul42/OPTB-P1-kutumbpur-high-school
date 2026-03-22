const FormInput = ({
  label,
  name,
  type = "text",
  register,
  errors,
  placeholder,
  required,
  disabled,
  options,
  rows = 4,
  className = "",
}) => {
  const hasError = errors && errors[name];
  const isValid = !hasError && register && register(name)?.value;

  const inputClasses = `
    mt-1 block w-full rounded-lg border px-4 py-3 text-slate-800 
    transition-all duration-200 shadow-sm
    focus:outline-none focus:ring-2 focus:ring-offset-0
    disabled:bg-slate-100 disabled:cursor-not-allowed
    ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50"
        : isValid
        ? "border-accent-500 focus:border-accent-600 focus:ring-accent-200"
        : "border-slate-300 focus:border-primary-500 focus:ring-primary-200 hover:border-slate-400"
    }
    ${className}
  `;

  if (type === "textarea") {
    return (
      <div className="w-full">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={hasError ? "true" : "false"}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={inputClasses}
          {...(register ? register(name) : {})}
        />
        {hasError && (
          <p
            id={`${name}-error`}
            className="mt-2 text-sm text-red-600 flex items-center gap-1"
            role="alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {errors[name].message}
          </p>
        )}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="w-full">
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <select
          id={name}
          disabled={disabled}
          aria-invalid={hasError ? "true" : "false"}
          aria-describedby={hasError ? `${name}-error` : undefined}
          className={inputClasses}
          {...(register ? register(name) : {})}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {hasError && (
          <p
            id={`${name}-error`}
            className="mt-2 text-sm text-red-600 flex items-center gap-1"
            role="alert"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {errors[name].message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError ? "true" : "false"}
        aria-describedby={hasError ? `${name}-error` : undefined}
        className={inputClasses}
        {...(register ? register(name) : {})}
      />
      {hasError && (
        <p
          id={`${name}-error`}
          className="mt-2 text-sm text-red-600 flex items-center gap-1"
          role="alert"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default FormInput;
