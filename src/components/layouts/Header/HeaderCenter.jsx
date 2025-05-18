import { useRef, useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import useDebounce from "../../../hooks/useDebounce";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const HeaderCenter = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const panelRef = useRef();
  const animateRef = useRef(true);

  useEffect(() => {
    let timeout;
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        animateRef.current = false;
        timeout = setTimeout(() => {
          setOpen(false);
        }, 200);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeout);
    };
  }, [open]);

  const debounceText = useDebounce(text, 700);

  useEffect(() => {
    const searchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/products?title_like=${debounceText}`
        );

        if (!res.ok) {
          throw new Error("Ürünler aranırken bir hata oluştu");
        }
        const dt = await res.json();

        setSearchResult(dt);
      } catch {
        toast.error("Ürünler aranırken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    if (debounceText.length > 3) {
      searchProduct();
    }
  }, [debounceText]);

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 3) {
      animateRef.current = true;
      setOpen(true);
    } else {
      animateRef.current = false;
      if (open) {
        setTimeout(() => {
          setOpen(false);
        }, 200);
      }
    }
  };

  const reset = () => {
    setText("");
    animateRef.current = false;
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 200);
    }
  };

  return (
    <div
      ref={panelRef}
      className={`relative w-1/2 lg:w-1/3 hidden sm:block ${
        !open ? "rounded-lg" : "rounded-t-lg"
      }  border border-slate-300 shadow-sm`}
    >
      <div className="flex items-center gap-3  pe-2">
        <FaMagnifyingGlass
          className={`text-white size-8  bg-black w-[40px] ${
            !open ? "rounded-s-lg" : "rounded-ss-lg"
          }  py-2`}
        />
        <input
          onChange={handleChange}
          value={text}
          type="text"
          className="outline-none text-sm w-full"
          placeholder="Bir şeyler arayın"
        />
        {text.length > 0 && (
          <FaXmark onClick={() => reset()} className="cursor-pointer" />
        )}
      </div>
      {open && (
        <div
          className={`absolute ${
            animateRef.current ? "animate-fadeIn" : "animate-fadeOut"
          }  top-full bg-white w-full border border-slate-300 max-h-[230px] overflow-y-auto shadow-sm rounded-b-lg`}
        >
          {loading ? (
            <div className="h-28 flex items-center justify-center">
              <i className="fa-solid fa-spinner animate-spin text-4xl"></i>
            </div>
          ) : searchResult.length === 0 ? (
            <div className="h-28 flex items-center justify-center">
              Hiç bir sonuç bulunamadı
            </div>
          ) : (
            searchResult.map((dt) => (
              <Link onClick={() => reset()} to={`/product/${dt.id}`}>
                <div
                  key={"search_result_" + dt.id}
                  className="flex items-center border-b border-slate-300 gap-3 px-3 py-1.5"
                >
                  <img className="h-12" src={dt.image} alt="" />
                  <div>
                    <h6 className="text-sm font-semibold">{dt.title}</h6>
                    <div className="flex items-center gap-2 mt-1  text-xs">
                      <span className="font-semibold">{dt.rating}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }, (_, i) =>
                          i + 1 <= Math.round(dt.rating) ? 1 : 0
                        ).map((item, i) => (
                          <i
                            key={"rating_" + dt.title + i}
                            className={`fa-solid fa-star ${
                              item ? "text-orange-700" : "text-orange-700/10"
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm font-medium">{dt.price}$</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderCenter;
