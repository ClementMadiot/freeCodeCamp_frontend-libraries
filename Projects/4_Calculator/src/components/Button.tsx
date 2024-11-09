interface ButtonDataProps {
  id: string;
  value: string ;
  className: string;
}
type HandleProps = {
  handleClick: (val: string) => void;
};

const buttonData: ButtonDataProps[] = [
  // prettier-ignore
  { id: "clear", value: "AC", className: "col-span-2 bg-red w-full" },
  { id: "divide", value: "/", className: "bg-grey-100" },
  { id: "multiply", value: "*", className: "bg-grey-100" },
  { id: "seven", value: "7", className: "bg-grey-200" },
  { id: "eight", value: "8", className: "bg-grey-200" },
  { id: "nine", value: "9", className: "bg-grey-200" },
  { id: "subtract", value: "-", className: "bg-grey-100" },
  { id: "four", value: "4", className: "bg-grey-200" },
  { id: "five", value: "5", className: "bg-grey-200" },
  { id: "six", value: "6", className: "bg-grey-200" },
  { id: "add", value: "+", className: "bg-grey-100" },
  { id: "one", value: "1", className: "bg-grey-200" },
  { id: "two", value: "2", className: "bg-grey-200" },
  { id: "three", value: "3", className: "bg-grey-200" },
  { id: "equals", value: "=", className: "row-span-2 col-span-1 bg-blue h-full" },
  { id: "zero", value: "0", className: "col-span-2 w-full bg-grey-200" },
  { id: "decimal", value: ".", className: "bg-grey-200" },
];

function Button({ handleClick}: HandleProps) {

  return (
    <div id="calculator" className="grid grid-cols-4 grid-rows-5">
      {buttonData.map((btn) => (
        <button
          key={btn.id}
          id={btn.id}
          className={btn.className}
          type="button"
          onClick={() => handleClick && handleClick(btn.value)}
        >
          {btn.value}
        </button>
      ))}
    </div>
  );
}

export default Button;