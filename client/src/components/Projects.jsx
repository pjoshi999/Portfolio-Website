import React from "react";
import useIntersection from "../utils/useIntersection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

const Projects = () => {
  const [myRef, isVisible] = useIntersection();
  return (
    <div
      className="relative bg-[#161616] text-white overflow-y-hidden pt-12 pb-16"
      id="projects"
    >
      {/* Ellipse - Background */}
      <img
        src="/img/icons/ellipse-26.png"
        alt=""
        className="absolute -rotate-90 -bottom-[11rem] w-[30rem] select-none 2xl:-bottom-[18rem] xl:-bottom-[18rem] lg:-bottom-[18rem] md:-bottom-[18rem] sm:-bottom-[14rem] 2xl:-left-0 xl:-left-16 lg:-left-40 md:-left-52 sm:-left-40"
      />
      {/* Ellipse - Background */}
      <img
        src="/img/icons/ellipse-27.png"
        alt=""
        className="absolute -top-60 right-0 w-96 select-none 2xl:-top-96 xl:-top-96 lg:-top-96 md:-top-96 sm:-top-96"
      />

      <h1
        className={`text-3xl font-semibold text-center pb-[0.35rem] rounded-full bg-bottom bg-gradient-to-r from-[#13FF00] to-[#0872BF] bg-no-repeat bg-[length:50px_3px] ${
          isVisible
            ? "translate-y-0 ease-in-out duration-500 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
        ref={myRef}
      >
        PROJECTS
      </h1>
      <div className="flex justify-center mx-[17rem] 2xl:mx-[17rem] xl:mx-[14rem] lg:mx-[8rem] md:mx-[5rem] sm:mx-0">
        <div className="pt-12 2xl:pt-12 xl:pt-8">
          <Swiper
            effect={"coverflow"}
            spaceBetween={60}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            style={{
              "--swiper-pagination-color": "#13FF00",
              "--swiper-pagination-bottom": "8px",
              "--swiper-navigation-color": "#13FF00",
              "--swiper-navigation-size": "40px",
            }}
            className={`flex justify-center ${
              isVisible
                ? "translate-y-0 ease-in-out duration-700 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            ref={myRef}
          >
            <SwiperSlide>
              <a
                href="https://watchifyin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/watchify.png"
                  alt=""
                  className="h-[32rem] 2xl:h-[32rem] xl:h-[32rem] lg:h-[28rem] md:h-[24rem] sm:h-[15rem]"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://foodhutin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/foodhut.png"
                  alt=""
                  className="h-[32rem] 2xl:h-[32rem] xl:h-[32rem] lg:h-[28rem] md:h-[24rem] sm:h-[15rem]"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://cloudcast.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/cloudcast.png"
                  alt=""
                  className="h-[32rem] 2xl:h-[32rem] xl:h-[32rem] lg:h-[28rem] md:h-[24rem] sm:h-[15rem]"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://sortingvisualizer999.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/sorting-visualizer.png"
                  alt=""
                  className="h-[32rem] 2xl:h-[32rem] xl:h-[32rem] lg:h-[28rem] md:h-[24rem] sm:h-[15rem]"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://amazonclone999.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/amazon-clone.png"
                  alt=""
                  className="h-[32rem] 2xl:h-[32rem] xl:h-[32rem] lg:h-[28rem] md:h-[24rem] sm:h-[15rem]"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://pjoshi999.github.io/University-website/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/university.png"
                  alt=""
                  className="h-[32rem] 2xl:h-[32rem] xl:h-[32rem] lg:h-[28rem] md:h-[24rem] sm:h-[15rem]"
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
