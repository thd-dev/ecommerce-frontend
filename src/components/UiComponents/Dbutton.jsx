import clsx from "clsx";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={clsx(
        "bg-gray-950 cursor-pointer text-gray-100 w-56 flex items-center justify-center h-20 relative transition-all duration-500 hover:bg-gray-200 hover:text-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
