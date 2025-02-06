
import { Link } from "react-router-dom"


const Navbar = ({customStyle}:{customStyle?:string}) => {
  return (
    <div className={`flex gap-8 text-white *:hover:text-[#D87D4A] ${customStyle} `}>
        <Link to={"/home"}>HOME</Link>
        <Link to={"/category/headphones"}>HEADPHONES</Link>
        <Link to={"/category/speakers"}>SPEAKERS</Link>
        <Link to={"/category/earphones"}>EARPHONES</Link>
    </div>
  )
}

export default Navbar
