import Button from "../ui/Button";

const SliderItem = ({ title, content, image }) => {
  return (
    <div className="slide min-w-full flex flex-col gap-12 md:flex-row justify-between items-center">
      <div className="flex-1 ps-8 md:ps-16">
        <h6 className="font-semibold text-3xl mt-12 md:mt-0 mb-4">{title}</h6>
        <p>{content}</p>
        <Button className="px-12 bg-indigo-700 text-white mt-3">EXPLORE</Button>
      </div>
      <div className="flex-1">
        <img
          className="object-contain mx-auto h-[350px]"
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default SliderItem;
