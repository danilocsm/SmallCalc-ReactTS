import { useContext } from "react";

interface CalcButtonProps {
  text: string;
  onClick: (value: string) => void;
  operation: string;
}

export default function CalculatorButton(props: CalcButtonProps) {
  return (
    <button
      disabled={
        props.operation !== "" && ["+", "-", "*", "/"].includes(props.text)
      }
      className="hover:border-zinc-100 focus:border-zinc-100 transition-colors:100 w-10 rounded-md border-2 border-cyan-400 font-bold text-white text-base text-center items-center justify-center my-2 disabled:opacity-25 disabled:hover:border-cyan-400"
      onClick={() => {
        props.onClick(props.text);
      }}
    >
      {`${props.text}`}
    </button>
  );
}
