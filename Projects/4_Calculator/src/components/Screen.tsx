type DisplayProps = {
  input: string;
  output: string;
};
function Screen({ input, output }: DisplayProps) {

  return (
    <div className="w-full min-h-[64px]">
    <div
      id="display"
      className="bg-black text-whiteSmoke  text-end text-3xl"
    >
      {input}
    </div>
    <div className="text-end text-yellow text-lg">{output}</div>
    </div>
  );
}

export default Screen;