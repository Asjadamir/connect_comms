import React from "react";

const InputField = ({ errorMessage, isError, name, label, value, ...rest }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input
                name={name}
                id={name}
                placeholder=" "
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:border-gray-600 d focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                {...rest}
            />
            <label
                htmlFor={name}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>

            {isError && (
                <p className="text-red-800 font-normal text-sm mt-2">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default InputField;
