const PortfolioItem = ({ src }) => {
  const hover3D = (e) => {
    // const scale = 'scale(0.9)'
    // console.log('style:', e.target.style.transform)

    const blockWidth = e.target.clientWidth
    const blockHeight = e.target.clientHeight

    const x = e.clientX - e.target.getBoundingClientRect().left
    const y = e.clientY - e.target.getBoundingClientRect().top

    //
    console.log('x-->', Math.round(x), 'y-->', Math.round(y))
    //

    const middleX = blockWidth / 2
    const middleY = blockHeight / 2
    // let corX = 0
    // const corY = 0
    // if (middleY - y >= 0) {
    //   corX =
    //     middleX >= x
    //       ? ((x - middleX) / middleX) * 10
    //       : ((x - middleX) / middleX) * -10
    
    // } else if (middleY - y < 0) {
    //   corX =
    //     middleX >= x
    //       ? ((x - middleX) / middleX) * -10
    //       : ((x - middleX) / middleX) * 10
    // }
 let corX =-10;
 let corY = 10;

 if(y<40 && x<40){
   corX =-10
   corY = 10
  } 
  if(y>e.target.clientHeight-40 && x<40){
    corX = 10
    corY = 10
 } 
 if(x>e.target.clientWidth-40 && y<40 ){
  corX = -10
  corY = -10
 }
 if(x>e.target.clientWidth-40 && y>e.target.clientHeight-40){
  corX = 10
  corY = -10
 }
 console.dir(e.target);

          
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
