const Promotion = () => {
  const countries = [
    { src: "/my-travel-world/assets/img/china.jpg", name: "china" },
    { src: "/my-travel-world/assets/img/usa.jpg", name: "usa" },
    { src: "/my-travel-world/assets/img/japan.jpg", name: "japan" },
    { src: "/my-travel-world/assets/img/gdansk.jpg", name: "gdansk" },
    { src: "/my-travel-world/assets/img/germany.jpg", name: "germany" },
    { src: "/my-travel-world/assets/img/hawai.jpg", name: "hawai" },
    { src: "/my-travel-world/assets/img/italia.jpg", name: "italia" },
    { src: "/my-travel-world/assets/img/new zealand.jpg", name: "new zealand" },
    { src: "/my-travel-world/assets/img/texas.jpg", name: "texas" }
  ]
  const countri= countries.map((el)=>(<div  className=" p-3.5 card-size"><img style={{width:"100%",height:"100%",objectFit:"cover"}} className=" " src={el.src} alt={el.name} key={el.name} />
</div>))
  
  return (
    <div className=" mt-24  h-60 w-full">
      <div className="  font-bold text-xs w-1/4 mx-auto flex  justify-between items-center tracking-wider ">
        <a
          className="hover:text-gray-600 focus:text-gray-50 focus:bg-gray-900 rounded-md p-2 outline-none  "
          href="#"
        >
          ALL
        </a>
        <a
          className="hover:text-gray-600 focus:text-gray-50 focus:bg-gray-900 rounded-md p-2 outline-none  "
          href="#"
        >
          BRANDING
        </a>
        <a
          className="hover:text-gray-600 focus:text-gray-50 focus:bg-gray-900 rounded-md p-2 outline-none  "
          href="#"
        >
          CONCEPT
        </a>
        <a
          className="hover:text-gray-600 focus:text-gray-50 focus:bg-gray-900 rounded-md p-2 outline-none  "
          href="#"
        >
          DESIGN
        </a>
      </div>
      <div  className="brd flex  flex-wrap justify-center p-3  bg-gray-900 ">
     {countri}
      </div>
    </div>
  )
}
export default Promotion
