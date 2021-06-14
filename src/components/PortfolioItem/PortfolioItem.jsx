const PortfolioItem = ({ src }) => {
  const hover3D = (e) => {
    // const scale = 'scale(0.9)'
    // console.log('style:', e.target.style.transform)

    const blockWidth = e.target.clientWidth
    const blockHeight = e.target.clientHeight

    const x = e.clientX - e.target.getBoundingClientRect().left
    const y = e.clientY - e.target.getBoundingClientRect().top

    //
    console.log('x-->', x, 'y-->', y)
    //

    const middleX = blockWidth / 2
    const middleY = blockHeight / 2
    let corX = 0
    const corY = 0
    if (middleY - y >= 0) {
      corX =
        middleX >= x
          ? ((x - middleX) / middleX) * 10
          : ((x - middleX) / middleX) * -10
    
    } else if (middleY - y < 0) {
      corX =
        middleX >= x
          ? ((x - middleX) / middleX) * -10
          : ((x - middleX) / middleX) * 10
    }

    e.target.style.transform = `perspective(1000px) rotateX(${corX}deg) rotateY(${corY}deg)`
  }
  return (
    <div className=" brd1 card-size p-3.5">
      <div
        style={{
          backgroundImage: `url(${src})`,
          willChange: 'transform',
        }}
        onMouseMove={hover3D}
        className="background-image  overflow-hidden w-full h-full "
      ></div>
    </div>
  )
}
export default PortfolioItem
