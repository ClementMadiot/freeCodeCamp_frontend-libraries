interface ButtonDataProps {
  id: string;
  value: string | number;
  dataKey: number;
  className: string;
}
type HandleProps = {
  handleClick?: (val: string) => void;
  // handleEqual?: (val: string) => void;
  handleClear?: () => void;
};

const buttonData: ButtonDataProps[] = [
  {
    id: "clear",
    value: "AC",
    dataKey: 67,
    className: "col-span-2 bg-red w-full",
  },
  {
    id: "divide",
    value: "/",
    dataKey: 191,
    className: "bg-grey-100",
  },
  {
    id: "multiply",
    value: "*",
    dataKey: 106,
    className: "bg-grey-100",
  },
  {
    id: "seven",
    value: 7,
    dataKey: 55,
    className: "bg-grey-200",
  },
  {
    id: "eight",
    value: 8,
    dataKey: 56,
    className: "bg-grey-200",
  },
  {
    id: "nine",
    value: 9,
    dataKey: 57,
    className: "bg-grey-200",
  },
  {
    id: "subtract",
    value: "-",
    dataKey: 189,
    className: "bg-grey-100",
  },
  {
    id: "four",
    value: 4,
    dataKey: 52,
    className: "bg-grey-200",
  },
  {
    id: "five",
    value: 5,
    dataKey: 53,
    className: "bg-grey-200",
  },
  {
    id: "six",
    value: 6,
    dataKey: 54,
    className: "bg-grey-200",
  },
  {
    id: "add",
    value: "+",
    dataKey: 187,
    className: "bg-grey-100",
  },
  {
    id: "one",
    value: 1,
    dataKey: 49,
    className: "bg-grey-200",
  },
  {
    id: "two",
    value: 2,
    dataKey: 50,
    className: "bg-grey-200",
  },
  {
    id: "three",
    value: 3,
    dataKey: 51,
    className: "bg-grey-200",
  },
  {
    id: "equals",
    value: "=",
    dataKey: 13,
    className: "row-span-2 bg-blue h-full",
  },
  {
    id: "zero",
    value: 0,
    dataKey: 48,
    className: "col-span-2 w-full bg-grey-200",
  },
  {
    id: "decimal",
    value: ".",
    dataKey: 190,
    className: "bg-grey-200",
  },
];

function Button({ handleClick, handleClear }: HandleProps) {
  const ClearButton: React.FC<{ handleClear: () => void }> = ({
    handleClear
  }) => {
    return (
      <>
        {buttonData.slice(0, 1).map((btn) => (
          <button 
            key={btn.id}
            id={btn.id}
            className={btn.className}
            data-key={btn.dataKey}
            onClick={handleClear}
          >
            {btn.value}
          </button>
        ))}
      </>
    );
  }
  // const clearButtonData = buttonData.slice(0, 1);


  return (
    <div id="calculator" className="grid grid-cols-4 grid-rows-5">
      {handleClear && <ClearButton handleClear={handleClear} />}
      {buttonData.slice(1, 17).map((btn) => (
        <button
          key={btn.id}
          id={btn.id}
          className={btn.className}
          data-key={btn.dataKey}
          type="button"
          onClick={() => handleClick && handleClick(String(btn.value))}
        >
          {btn.value}
        </button>
      ))}
    </div>
  );
}

export default Button;
