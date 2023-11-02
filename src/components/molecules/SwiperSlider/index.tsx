import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlidesPerViewContainer, SwiperSliderContainer } from "./styles";

const images = [
  "https://ensinio-public.s3.us-west-1.amazonaws.com/escola1/escola1/comment/images/7066100965685a05475425f8e4498a21.png",
  "https://ensinio-public.s3.us-west-1.amazonaws.com/escola1/escola1/comment/images/fa29c10721190905a2bbd39b72d08960.png",
  "https://ensinio-public.s3.us-west-1.amazonaws.com/escola1/escola1/comment/images/391c4389ac0994e31c96e6c905a0c049.png",
  "https://ensinio-public.s3.us-west-1.amazonaws.com/escola1/escola1/comment/images/7066100965685a05475425f8e4498a21.png",
  "https://ensinio-public.s3.us-west-1.amazonaws.com/escola1/escola1/comment/images/fa29c10721190905a2bbd39b72d08960.png",
  "https://ensinio-public.s3.us-west-1.amazonaws.com/escola1/escola1/comment/images/391c4389ac0994e31c96e6c905a0c049.png",
];

const maxSlidesPerView = 3;
const initialSlidesPerView =
  images.length > maxSlidesPerView ? maxSlidesPerView : images.length;

const SwiperSlider = () => {
  const [swiperLoop, setSwiperLoop] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(initialSlidesPerView);
  const [inputValue, setInputValue] = useState(0);

  return (
    <SwiperSliderContainer>
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        onSlideChange={() => setSwiperLoop(true)}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        // parallax={true}
        modules={[Pagination, Navigation]}
        speed={600}
        loop={swiperLoop}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image} className="swiper-slide">
            <Image
              src={image}
              alt=""
              fill
              // data-swiper-parallax={`-${index}00`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SlidesPerViewContainer>
        <label htmlFor="slides-per-view">
          Defina a quantidade de slides visiveis
        </label>
        <input
          type="number"
          min={0}
          max={images.length}
          onChange={(e) => setInputValue(Number(e.target.value))}
          value={inputValue}
          defaultValue={slidesPerView}
        />
        <button onClick={() => setSlidesPerView(inputValue)}>
          Definir slides per view
        </button>
      </SlidesPerViewContainer>
    </SwiperSliderContainer>
  );
};

export default SwiperSlider;
