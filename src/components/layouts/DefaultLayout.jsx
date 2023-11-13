import Footer from "../Footer/Footer";
import MainBar from "../MainBar/MainBar";
import Marquee from "../Marquee/Marquee";
import Navbar from "../NavBar/Navbar";
import axios from "axios";

const DefaultLayout = (props) => {
  const handleLogIn = async (email, password) => {
    await axios
      .post("http://localhost:4000/signinSystem/signin/", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(response.data.userData)
        );
      });
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleSignUp = (data) => {
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
        <MainBar
          handleLogOut={handleLogOut}
          handleLogIn={handleLogIn}
          handleSignUp={handleSignUp}
        />
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
