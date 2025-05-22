import { useEffect } from "react";
import $ from "jquery";
import SliderItem from "./SliderItem";

const sliderContent = [
  {
    title: "Meet iPhone 15 Pro",
    content: "Reach the peak of power with the all-new titanium design and A17 Pro chip.",
    image: "/slider/15_pro_max.png",
  },
  {
    title: "Take a Glimpse into the Future with Vision Pro",
    content: "The perfect fusion of reality and the digital world is here now.",
    image: "/slider/vision_pro.png",
  },
  {
    title: "Power Meets Lightness with MacBook Air",
    content: "All-day performance, elegance, and portability with the M2-powered MacBook Air.",
    image: "/slider/macbook_air.png",
  },
  {
    title: "Discover Yourself with Apple Watch",
    content: "Health, fitness, and style—all on your wrist!",
    image: "/slider/apple_watch.png",
  },
  {
    title: "Focus on Sound with AirPods Pro",
    content: "Experience music like never before with next-gen noise cancellation.",
    image: "/slider/airpods_pro.png",
  },
];

const activateSlider = () => {
  let index = 0;
  const slideWidth = $(".slide").outerWidth();
  const slideCount = $(".slide").length;
  const sliderContainer = $(".slider-container");

  function goToSlide(i) {
    sliderContainer.css("transform", `translateX(-${i * slideWidth}px)`);
  }

  $("#slide-left-btn").on("click", () => {
    index = (index - 1 + slideCount) % slideCount;
    goToSlide(index);
  });

  $("#slide-right-btn").on("click", () => {
    index = (index + 1) % slideCount;
    goToSlide(index);
  });

  setInterval(() => {
    index = (index + 1) % slideCount;
    goToSlide(index);
  }, 12000);

  goToSlide(index);
};

const Slider = () => {
  useEffect(() => {
    activateSlider();
    return () => {};
  }, []);

  return (
    <div className="relative bg-slate-100 py-6 rounded-xl mb-12">
      <div
        id="slide-left-btn"
        className="size-10 bg-slate-300 z-20 cursor-pointer rounded-full absolute left-0 -translate-y-1/2 top-1/2 flex items-center justify-center py-4"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div
        id="slide-right-btn"
        className="size-10 bg-slate-300 z-20 cursor-pointer rounded-full absolute right-0 -translate-y-1/2 top-1/2 flex items-center justify-center py-4"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="overflow-hidden">
        <div className="slider-container flex max-w-full transition-all flex-nowrap">
          {sliderContent.map((item, index) => (
            <SliderItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
