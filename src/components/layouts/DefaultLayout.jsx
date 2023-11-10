import Footer from "../Footer/Footer";
import MainBar from "../MainBar/MainBar";
import Marquee from "../Marquee/Marquee";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import { setCurrentUser } from "../../store/User.reducer";
import { useDispatch } from "react-redux";

const DefaultLayout = (props) => {
  const dispatch = useDispatch();

  const handleLogIn = async (email, password) => {
    await axios
      .post("http://localhost:4000/signinSystem/signin/", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        dispatch(
          setCurrentUser({
            user: {
              ...response.data.userData,
            },
            isAuthenticated: true,
          })
        );
      });
  };

  const handleSignUp = async (data) => {
    try {
      axios
        .post("http://localhost:4000/signinSystem/signup/", data)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="fixed z-10 w-full">
        <Marquee />
        <MainBar handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
      </div>
      <div className="pt-[160px]">
        <Navbar />
        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
