import { cn } from "@/lib/utils";

const FormInput = ({
  id,
  type = "text",
  className = "",
  isTextarea = false,
  ...props
}) => {
  const baseClasses = "w-full py-[11px] px-3 text-sonicSilver border border-lightSilver rounded-md";

  if (isTextarea) {
    return (
      <textarea
        id={id}
        className={cn(baseClasses, className)}
        {...props}
      />
    );
  }

  return (
    <input
      id={id}
      type={type}
      className={cn(baseClasses, className)}
      {...props}
    />
  );
};

export default FormInput;