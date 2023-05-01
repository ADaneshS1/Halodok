import React, {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import Bann from "./Banner";

import Bannne from './../assets/697613_31-3-2023_0-51-15.jpeg'
import Banne2 from './../assets/491039_24-1-2023_9-42-28.jpeg'
import Banne3 from './../assets/593718_29-3-2023_14-7-13.jpeg'


const Caro = () => {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">

        <SwiperSlide>
            <div>
                <Bann image={Bannne}/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <Bann image={Banne2}/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <Bann image={Banne3}/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <Bann image={Banne3}/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <Bann image={Banne3}/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <Bann image={Banne3}/>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default Caro