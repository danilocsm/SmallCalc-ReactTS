import React from "react";
import { useEffect, useState } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [leftOperand, setLeftOperand] = useState<string>("");
  const [rightOperand, setRightOperand] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [isLeftOperand, setIsLeftOperand] = useState<boolean>(true);
  const operators = ["+", "-", "*", "/"];

  const equalClickAction = () => {
    let result: number = 0;
    switch (operation) {
      case "+":
        result = parseInt(leftOperand) + parseInt(rightOperand);
        break;
      case "-":
        result = parseInt(leftOperand) - parseInt(rightOperand);
        break;
      case "*":
        result = parseInt(leftOperand) * parseInt(rightOperand);
        break;
      case "/":
        result = parseInt(leftOperand) / parseInt(rightOperand);
        break;
    }
    setLeftOperand("");
    setRightOperand("");
    setOperation("");
    setDisplayValue(result.toString());
    setIsLeftOperand(true);
  };

  useEffect(() => {
    if (leftOperand.length > 0) setDisplayValue(leftOperand);
  }, [leftOperand]);

  const defaultClickAction = (value: string) => {
    if (!operators.includes(value) && isLeftOperand) {
      setLeftOperand((operand) => {
        return operand.concat(value);
      });
    } else if (operators.includes(value)) {
      setOperation(value);
      setIsLeftOperand(false);
    } else {
      setRightOperand((operand) => {
        return operand.concat(value);
      });
    }

    setDisplayValue((previousDisplayValue) => {
      return previousDisplayValue.concat(value);
    });
  };

  return (
    <>
      <CalculatorDisplay displayValue={displayValue} />
      <div className="mx-10 m-2 rounded-md grid justify-items-center bg-zinc-700 w-40 grid-cols-3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <CalculatorButton
              text={`${i}`}
              operation={operation}
              onClick={defaultClickAction}
            />
          );
        })}
        {["+", "-", "*", "/"].map((i) => {
          return (
            <CalculatorButton
              text={`${i}`}
              operation={operation}
              onClick={defaultClickAction}
            />
          );
        })}
        <CalculatorButton
          text={"="}
          operation={operation}
          onClick={equalClickAction}
        />
      </div>
    </>
  );
}
