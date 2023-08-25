"use client";

import { useState } from "react";

let value = "";
let obj = {
  name: "Junsu"
}

export default function Page() {
  console.log("Page render")
  return <div className="">
    <ComponentA foo={obj}/>
    <ComponentB />
  </div>;
}

function ComponentA({foo} : {foo: {name: string}}) {
  console.log("ComponentA render")
  return (
    <div>
      <input className="text-black" type="text" onChange={(e) => (obj = {name: e.target.value})} />
    </div>
  );
}
function ComponentB() {
  console.log("ComponentB render")
  const [display, setDisplay] = useState('');

  return (
    <div>
      <div>{display}</div>
      <button onClick={() => setDisplay(obj.name)}>Update</button>
    </div>
  );
}
