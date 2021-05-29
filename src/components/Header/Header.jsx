import instagram from "../../assets/icons/instagram.svg"
import { useEffect, useState, useRef } from "react"

const Header = () => {
  const text = ["I like travel", "I live in Poland", "I want to live in Japen"]
  const textLength = text.length
  const [promo, setPromo] = useState("")
  const cursor = "|"
  const count = useRef(0)
  const inc = useRef(1)
  const currentIndex = useRef(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count.current <= 0) {
        inc.current = 1
        currentIndex.current = (currentIndex.current + 1) % textLength
      }
      if (count.current >= text[currentIndex.current].length) {
        inc.current = -1
      }
      count.current = count.current + inc.current
      setPromo(() => text[currentIndex.current].slice(0, count.current))
      console.log("tyt->", count.current)
    }, 200)
    return () => clearTimeout(timer)
  }, [promo])

  return (
    <header className=" bg-white h-72 w-full">
      <div className="  brd flex justify-between  h-12 main-navbar">
        <div className="font-bold w-1/6 flex justify-start items-center ml-10 ">
          YP JUS
        </div>
        <div className="brd  font-bold text-xs w-1/3 flex  justify-between items-center tracking-wider ">
          <a href="#">WELCOME</a>
          <a href="#">ABOUT</a>
          <a href="#">SHOWCASE</a>
          <a href="#">JOURNAL</a>
          <a href="#">CONTACT</a>
        </div>

        <div className=" flex justify-end mr-9 items-center w-1/6">
          <img src={instagram} className="w-6" />
        </div>
      </div>
      <div className=" brd text-center mt-48">
        <h3 className="text-large">Hello i'm Ilya </h3>
        <h1 className="text-7xl">
          {promo}
          {cursor}
        </h1>
      </div>
    </header>
  )
}
export default Header
