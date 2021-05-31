import { useEffect, useState, useRef } from "react"

const InteractiveLine = ({ arrayOfPromos, speed = 200 }) => {
  const text = arrayOfPromos
  const textLength = text.length
  const [promo, setPromo] = useState("")
  const cursor = "|"
  const count = useRef(0)
  const inc = useRef(1)
  const currentIndex = useRef(-1)
  const localSpeed = useRef(speed)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count.current <= 0) {
        inc.current = 1
      localSpeed.current= speed
        currentIndex.current = (currentIndex.current + 1) % textLength
    }
    if (count.current === text[currentIndex.current].length-1 && inc.current === -1) {
        localSpeed.current= speed/2
    }
    if (count.current === text[currentIndex.current].length) {
        inc.current = -1
        localSpeed.current = 1500
      }
      count.current = count.current + inc.current
      setPromo(() => text[currentIndex.current].slice(0, count.current))
    }, localSpeed.current)
    return () => clearTimeout(timer)
  }, [promo])
  return (
    <h1 className="text-2xl mt-6 md:text-7xl">
      {promo}
      {cursor}
    </h1>
  )
}
export default InteractiveLine
