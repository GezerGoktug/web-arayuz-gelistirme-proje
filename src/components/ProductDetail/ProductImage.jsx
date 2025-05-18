const ProductImage = ({ image }) => {
  return (
    <div className="bg-slate-100 rounded-lg p-12 lg:p-24 h-72 box-content">
      <img className="object-contain mx-auto size-full" src={image} alt="" />
    </div>
  );
};

export default ProductImage;
