import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";


const Header = () => {


  return (
    <header className="top-fixed top-0 left-0 right-0 py-5 border-b border-slate-300 shadow bg-white z-50">
      <div className="container flex items-center justify-between">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
