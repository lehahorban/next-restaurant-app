import { NextPage } from "next";
import { InputType } from "./InputType";

const Input: NextPage<InputType> = ({
  label,
  name,
  errors,
  register,
  checkbox,
}) => {
  const inputType = checkbox ? "checkbox" : "text";
  const containerClassName = checkbox ? "mb-4" : "mb-2";
  const labelClassName = checkbox
    ? "font-semibold flex items-center"
    : "block font-semibold";
  const errorClassName = checkbox ? "top-6" : "top-[70px]";
  const requiredMessage = `Це поле є обов'язковим`;
  const inputClassName = `w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
    errors[name] ? "border-red-500" : "border-gray-300"
  }`;

  return (
    <div className={`relative py-1 ${containerClassName}`}>
      <label htmlFor={name} className={labelClassName}>
        {checkbox && (
          <input
            type={inputType}
            id={name}
            {...register(name, { required: requiredMessage })}
            className={`mr-2 leading-tight text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
        )}
        {label}
      </label>
      {!checkbox && (
        <input
          type={inputType}
          id={name}
          {...register(name, { required: requiredMessage })}
          className={inputClassName}
        />
      )}
      {errors[name] && (
        <span
          className={`text-red-500 text-sm absolute left-0 ${errorClassName}`}
        >
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default Input;
