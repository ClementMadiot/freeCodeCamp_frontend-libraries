import React from "react";

function ButtonTouch() {
  return <div className="grid grid-cols-4 grid-rows-5">
    {/* first col  */}
    <button className="col-span-2 bg-red w-full " id="clear" type="button">AC</button>
    <button className="bg-grey-100 " id="divide" type="button">/</button>
    <button className="bg-grey-100" id="multiply" type="button">*</button>
    {/* second col  */}
    <button className="bg-grey-200" id="seven" type="button">7</button>
    <button className="bg-grey-200" id="eight" type="button">8</button>
    <button className="bg-grey-200" id="nine" type="button">9</button>
    <button className="bg-grey-100" id="subtract" type="button">-</button>
{/* third col  */}
    <button className="bg-grey-200" id="four" type="button">4</button>
    <button className="bg-grey-200" id="five" type="button">5</button>
    <button className="bg-grey-200" id="six" type="button">6</button>
    <button className="bg-grey-100" id="add" type="button">+</button>
    {/* fourth col  */}
    <button className="bg-grey-200" id="one" type="button">1</button>
    <button className="bg-grey-200" id="two" type="button">2</button>
    <button className="bg-grey-200" id="three" type="button">3</button>
    <button className="row-span-2 bg-blue h-full " id="equals" type="button">=</button>
    {/* fifth col  */}
    <button className="col-span-2 w-full bg-grey-200" id="zero" type="button">0</button>
    <button className="bg-grey-200" id="decimal" type="button">.</button>

  </div>;
}

export default ButtonTouch;
