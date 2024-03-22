"use client";

function Button({ bg, color, size, variant, style, children }) {
  let sizeStyle = "";
  if (size === "small") {
    sizeStyle = "text-sm px-6 py-3";
  } else if (size === "medium") {
    sizeStyle = "";
  } else if (size === "large") {
    sizeStyle = "text-lg px-10 py-5";
  }

  let variantStyle = "";
  if (variant === "text-btn") {
    variantStyle = "bg-transparent text-primary";
  } else if (variant === "bordered-btn") {
    variantStyle = "border-4 border-primary";
  }

  return (
    <button
      className={`uppercase rounded-lg px-8 py-4 ${sizeStyle} ${variantStyle} bg-${bg} text-${color} ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
