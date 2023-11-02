import MainBar from "../MainBar/MainBar";
import Marquee from "../Marquee/Marquee";
import Navbar from "../NavBar/Navbar";

const DefaultLayout = (props) => {
  return (
    <div>
      <div className="fixed z-10 w-full">
        <Marquee />
        <MainBar />
      </div>
      <div className="pt-[160px]">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
