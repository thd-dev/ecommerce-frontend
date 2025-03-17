import clsx from "clsx";

export default function InputField({ className = "", ...props }) {
  return (
    <input
      className={clsx(
        `border-[1px] text-lg p-2  rounded-full w-full text-center focus:outline-0 cursor-pointer transition duration-300 ease-in-out max-w-96 m-auto md:max-w-full`,
        className
      )}
      {...props}
    />
  );
}

export const FormInputField = ({ ...props }) => {
  return (
    <input
      {...props}
      className="border-b-[1px] w-full focus:outline-0 cursor-pointer transition duration-300 ease-in-out"
    />
  );
};
