type DisplayProps = {
  display: string;
};
function Screen({ display }: DisplayProps) {
  return (
    <div
      id="display"
      className="bg-black text-whiteSmoke w-full h-12 text-end text-3xl"
    >
      {display}
    </div>
  );
}

export default Screen;
