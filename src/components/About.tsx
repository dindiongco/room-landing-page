import imgDark from '../assets/image-about-dark.jpg'
import imgLight from '../assets/image-about-light.jpg'

function About() {
  return (
    <section>
        <div className='md:flex'>
            <img src={imgDark} alt="" />
            <div className='py-6 md:px-8 px-1'>
                <h1 className='font-bold text-[1.375rem] tracking-widest py-3'>About our furniture</h1>
                <p className='font-medium text-sm py-6'>
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={imgLight} alt="" />
        </div>
    </section>
  )
}

export default About