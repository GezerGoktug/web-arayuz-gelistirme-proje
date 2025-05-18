import { useEffect } from "react";
import $ from "jquery";
import SliderItem from "./SliderItem";

const sliderContent = [
  {
    title: "iPhone 15 Pro ile Tanışın",
    content:
      "Yepyeni titanyum tasarımı ve A17 Pro çipiyle gücün zirvesine ulaşın.",
    image: "/slider/15_pro_max.png",
  },
  {
    title: "Vision Pro ile Geleceğe Göz Atın",
    content: "Gerçeklik ve dijital dünyanın kusursuz birleşimi şimdi burada.",
    image: "/slider/vision_pro.png",
  },
  {
    title: "MacBook Air ile Hafifliğe Güç Katın",
    content:
      "M2 çipli MacBook Air ile gün boyu performans, şıklık ve taşınabilirlik bir arada.",
    image: "/slider/macbook_air.png",
  },
  {
    title: "Apple Watch ile Kendini Keşfet",
    content: "Sağlık, fitness ve tarz. Tümünü bileğinde taşı!",
    image: "/slider/apple_watch.png",
  },
  {
    title: "AirPods Pro ile Sese Odaklan",
    content:
      "Yeni nesil gürültü engelleme ile müziği daha önce hiç duymadığın gibi yaşa.",
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
