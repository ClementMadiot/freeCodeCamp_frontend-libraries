type DisplayProps = {
  display: string
}
function Screen({ display }: DisplayProps) {
  return (
    <div id="display" className="bg-black text-whiteSmoke w-full h-8 text-end">
      {display}
    </div>
  )
}

export default Screen