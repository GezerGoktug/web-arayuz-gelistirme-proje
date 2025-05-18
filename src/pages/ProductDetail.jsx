import { useParams } from "react-router-dom";
import DetailContent from "../components/ProductDetail/DetailContent";
import ProductImage from "../components/ProductDetail/ProductImage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const params = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/products/${params.id}`);

        const dt = await res.json();

        if (!res.ok) throw new Error("Ürün detayları çekerken bir hata oluştu");

        console.log(dt);

        setProductDetail(dt);
      } catch {
        toast.error("Ürün detaylarını çekerken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [params]);
  if (productDetail === null) {
    return (
      <div className="text-center text-3xl font-semibold">Ürün bulunamadı</div>
    );
  }

  return (
    <>
      <div className="grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-2 gap-10 lg:gap-20">
        {loading ? (
          <>
            <div className="w-full h-[500px] bg-gray-200 animate-pulse rounded-lg" />
            <div className="space-y-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-10 bg-gray-300 rounded w-full" />
              <div className="h-10 bg-gray-300 rounded w-full" />
            </div>
          </>
        ) : (
          <>
            <ProductImage image={productDetail.image} />
            <DetailContent product={productDetail} />
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
