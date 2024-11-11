type DisplayProps = {
  display: string;
  calcul: string;
};
function Screen({ display, calcul }: DisplayProps) {

  return (
    <div className="w-full min-h-[64px]">
    <div
      id="display"
      className="bg-black text-whiteSmoke  text-end text-3xl"
    >
      {display}
    </div>
    <div id="calcul" className="text-end text-yellow text-lg">{calcul}</div>
    </div>
  );
}

export default Screen;