import useMediaQuery from "../hooks/useMediaQuery"
import iconArrow from "../assets/icon-arrow.svg"

type Props = {
    title: string
    description: string
    desktopImg: string
    mobileImg: string
}

function HeroItem({title, description, desktopImg, mobileImg}: Props) {
  const isAboveSmallScreens = useMediaQuery("(min-width: 376px)")

  return (
    <div className='h-full grid md:grid-cols-5 md:grid-rows-3'>
        <div className='md:row-start-1 md:row-span-3 md:col-start-1 md:col-span-3'>
            {isAboveSmallScreens ? <img src={desktopImg} alt="" />: <img src={mobileImg} alt="" />}
        </div>
        <div className='md:row-start-2 md:row-span-3 md:col-start-4 md:col-span-2 py-3 px-3'>
            <h1 className='font-bold text-[2rem]'>{title}</h1>
            <p className='font-medium text-sm'>{description}</p>
            <button className='tracking-[.5rem] mt-5'>SHOP NOW <span className="inline-flex"><img src={iconArrow}/></span></button>
        </div>
    </div>      
  )
}

export default HeroItem