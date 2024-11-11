type DisplayProps = {
  display: string ;
  output: string ;
};
function Screen({ display, output }: DisplayProps) {

  return (
    <div className="w-full min-h-[64px]">
    <div
      id="display"
      className="bg-black text-whiteSmoke  text-end text-3xl"
    >
      {display}
    </div>
    <div id="calcul" className="text-end text-yellow text-lg">{output}</div>
    </div>
  );
}

export default Screen;