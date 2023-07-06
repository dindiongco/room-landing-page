import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import logo from '../assets/logo.svg'

type Props = {
    isTopOfPage: boolean
}

function Navbar({isTopOfPage}: Props) {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)")
    const navbarBG = isTopOfPage ? "bg-transparent" : "bg-neutral-900 drop-shadow"
    
  return (
    <nav className={`${navbarBG} fixed top-0 z-30 w-full py-6`}>
        <div className="grid grid-rows-1 grid-cols-9 items-center px-5">
            <div className="col-start-5 md:col-start-1 row-start-1">
                <img src={logo} alt="" />
            </div>
        {isAboveMediumScreens ? (
            <div className="text-white | col-start-2 row-start-1 | flex gap-5">
                <a href="#">home</a>
                <a href="#">shop</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </div>
            ):
            <button className="row-start-1 col-start-1 md:col-start-10"
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../src/assets/icon-hamburger.svg" alt="" />
            </button>
        }
        </div>
    </nav>
  )
}

export default Navbar