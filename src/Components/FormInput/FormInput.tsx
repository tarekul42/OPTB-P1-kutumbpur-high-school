export interface SelectOption {
  value: string;
  label: string;
}

interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "select" | "textarea" | "password" | "number";
  register?: (name: string) => Record<string, unknown>;
  errors?: Record<string, unknown>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: SelectOption[];
  rows?: number;
  className?: string;
}

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
}: FormInputProps) => {
  const hasError = errors && name in errors;
  const errorMessage = hasError && errors ? (errors[name] as string) : undefined;

  const inputClasses = `
    mt-1 block w-full rounded-lg border px-4 py-3 text-slate-800
    transition-all duration-200 shadow-sm
    focus:outline-none focus:ring-2 focus:ring-offset-0
    disabled:bg-slate-100 disabled:cursor-not-allowed
    ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50"
        : "border-slate-300 focus:border-primary-500 focus:ring-primary-200 hover:border-slate-400"
    }
    ${className}
  `;

  const registerProps = register ? register(name) : {};

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
          {...registerProps}
        />
        {hasError && errorMessage && (
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
            {errorMessage}
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
          {...registerProps}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {hasError && errorMessage && (
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
            {errorMessage}
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
        {...registerProps}
      />
      {hasError && errorMessage && (
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
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormInput;
