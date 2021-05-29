import instagram from "../../assets/icons/instagram.svg"
import InteractiveLine from "../InteractiveLine/InteractiveLine"

const Header = () => {
  
  const text = ["I like travel", "I live in Poland", "I want to live in Japen"]
  return (
    <header className=" bg-white h-72 w-full">
      <div className="   flex justify-between  h-12 main-navbar">
        <div className="font-bold w-1/6 flex justify-start items-center ml-10 ">
          YP JUS
        </div>
        <div className="  font-bold text-xs w-1/3 flex  justify-between items-center tracking-wider ">
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
      <div className="  text-center mt-48">
        <h3 className="text-large">Hello i'm Ilya </h3>
       <InteractiveLine  arrayOfPromos={text} speed={150}/>
       
      </div>
    </header>
  )
}
export default Header
