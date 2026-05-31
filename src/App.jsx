import { useEffect, useState } from "react"

export default function App() {

  const [catFood, setCatFood] = useState(0);
  const [level, setLevel] = useState(0);
  const [clickPower, setClickPower] = useState(1);

  // useEffect(() => {
  //   levelUp();
  // }, [catFood])

  const upgrade = () => {
    if (catFood >= 10) {
      setClickPower(clickPower + 1);
      setLevel(level + 1);
      setCatFood(catFood - 10);
    }
  }

  return (
    <>
      <div className="money-wrapper">
        <p>Level {level}</p>
        <p>{catFood}&cent;</p>
      </div>
      <div className="cat-wrapper">
        <img onClick={() => { setCatFood(catFood + clickPower) }} className="cat" src="/cat.png" alt="cat" />
      </div>
      <div className="options">
        <input onClick={upgrade} className="button" type="button" value="10&cent;" />
      </div>
    </>
  )
}