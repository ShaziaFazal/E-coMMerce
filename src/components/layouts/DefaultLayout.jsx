import MainBar from "../MainBar/MainBar";
import Marquee from "../Marquee/Marquee";
import Navbar from "../NavBar/Navbar";

const DefaultLayout = (props) => {
  return (
    <div>
      <Marquee />
      <MainBar />
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
