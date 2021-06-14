const PortfolioItem = ({ src }) => {
  const hover3D = (e) => {
    const scale = 'scale(0.9)'
    console.log('style:', e.target.style.transform)

    const blockWidth = e.target.clientWidth
    const blockHeight = e.target.clientHeight

    const x = e.pageX - e.target.getBoundingClientRect().left
    const y = e.pageY - e.target.getBoundingClientRect().top
console.log("top YYYYYYYYYYYYYYYYYYYYYYYYYYYY",e.target.getBoundingClientRect().top);
    const middleX = blockWidth / 2
    const middleY = blockHeight / 2
     let corX = 0
    const corY = 0
    if(middleY-y >= 0)
    {
         corX = middleX >= x ?(x - middleX)/middleX*10:(x - middleX)/middleX*-10
         console.log(corY)
         console.log("верх")
         
        }else if(middleY-y < 0){
            corX = middleX >= x ?(x - middleX)/middleX*-10:(x - middleX)/middleX*10
            console.log("Y---->",y)
            console.log("pageY-->",e.pageY)
            console.log("x",x)
            console.log(corX)
            console.log("низ")
    }
        
   
    // const corX = 0

    console.log('xxx', corX)
    console.log('xxx', e.target.clientHeight)

    e.target.style.transform = `perspective(1000px) rotateX(${corX}deg) rotateY(${corY}deg)`
    //    console.log(`${x} ${y}`);
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
