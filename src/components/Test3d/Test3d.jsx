const Test3d = () => {
  const src = '/my-travel-world/assets/img/china.jpg'
  return (
      <>
      <div
          className="  brd m-20 w-96 h-96 bg-gray-200"/>
      <div style={{transformStyle: "preserve-3d"}} className=" brd w-96 h-96 flex ">
      <div
        className="  w-96 h-96"
        style={{
          backgroundImage: `url(${src})`,
          willChange: 'transform',
          transform: 'perspective(1000px) rotateX(40deg) rotateY(10deg)'
        }}
      />
    </div>
    </>
  )
}
export default Test3d
