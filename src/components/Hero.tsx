import iconPrev from '../assets/icon-angle-left.svg'
import iconNext from '../assets/icon-angle-right.svg'
import imgDesktop1 from '../assets/desktop-image-hero-1.jpg'
import imgDesktop2 from '../assets/desktop-image-hero-2.jpg'
import imgDesktop3 from '../assets/desktop-image-hero-3.jpg'
import imgMobile1 from '../assets/mobile-image-hero-1.jpg'
import imgMobile2 from '../assets/mobile-image-hero-2.jpg'
import imgMobile3 from '../assets/mobile-image-hero-3.jpg'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import HeroItem from './HeroItem';

const heroItems = [
  {
    "id": 1,
    "title": "Discover innovative ways to decorate",
    "description": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "desktopImg":imgDesktop1,
    "mobileImg": imgMobile1,
  },
  {
    "id": 2,
    "title": "We are available all across the globe",
    "description": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "desktopImg": imgDesktop2,
    "mobileImg": imgMobile2,
  },
  {
    "id": 3,
    "title": "Manufactured with the best materials",
    "description": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    "desktopImg": imgDesktop3,
    "mobileImg": imgMobile3,
  },
  
]

const Hero = () => {

  return (
    <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='h-[634px] w-full'
        >
          <div className="carousel-buttons | bg-neutral-700 py-5">
              <button className="swiper-button-prev"><img src={iconPrev} alt="" /></button>
              <button className="swiper-button-next"><img src={iconNext} alt="" /></button>
            </div>
            {heroItems.map((item) => {
            return (
            <SwiperSlide key={item.id}>
                <HeroItem
                    title={item.title}
                    description={item.description}
                    desktopImg={item.desktopImg}
                    mobileImg={item.mobileImg}
                />
            
            </SwiperSlide>
            )
            })}
            
        </Swiper>
  );
};

export default Hero;