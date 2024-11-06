type DisplayProps = {
  reset: boolean;
  display: string
}
function Screen({ reset, display }: DisplayProps) {
  return (
    <div id="display" className="bg-black text-whiteSmoke w-full h-12 text-end text-3xl">
      {reset ? "0": null}
      {display}
    </div>
  )
}

export default Screen