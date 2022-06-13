interface CalculatorDisplayProps {
  displayValue: string;
}

export default function CalculatorDisplay(props: CalculatorDisplayProps) {
  return (
    <div className="flex rounded-md mx-10 m-2 w-40 h-20 bg-white justify-center items-center text-xl opacity-75">
      {`${props.displayValue}`}
    </div>
  );
}
