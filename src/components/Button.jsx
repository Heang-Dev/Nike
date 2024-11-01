import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`px-7 font-montserrat flex items-center justify-center gap-2 py-4 text-lg leading-none border rounded-full
      ${fullWidth && "w-full"}
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "text-white bg-coral-red border-coral-red"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
