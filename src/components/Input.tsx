import { ForwardedRef, forwardRef } from "react";

type InputProps = {
  label: string;
  textarea?: boolean;
  [key: string]:
    | string
    | boolean
    | ForwardedRef<HTMLInputElement>
    | ForwardedRef<HTMLTextAreaElement>
    | undefined;
};

export const Input = forwardRef(function Input(
  { label, textarea = false, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) {
  const classes =
    "w-full p01 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
          className={classes}
          {...props}
        />
      ) : (
        <input
          ref={ref as ForwardedRef<HTMLInputElement>}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
});
