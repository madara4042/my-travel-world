import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header/Header'
import Promotion from './components/Promotion/Promotion'
import Footer from './components/Footer/Footer'
import MagicCursor from "./components/MagicCursor/MagicCursor"
// import Test3d from './components/Test3d/Test3d';


function App() {
  return (
// section
<>
<MagicCursor/>
<Header/> 
<Promotion/>
<Footer/> 
{/* <Test3d/> */}
</>
  );

}

export default App;
