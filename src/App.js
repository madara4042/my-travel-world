import './App.css';
import "tailwindcss/tailwind.css"
import Header from './components/Header/Header'
import Promotion from './components/Promotion/Promotion'
import Footer from './components/Footer/Footer'

function App() {
  return (
// section
<div className=" h-auto w-full  "> 
<Header/> 
<Promotion/>
<Footer/>
</div>
  );
}

export default App;
