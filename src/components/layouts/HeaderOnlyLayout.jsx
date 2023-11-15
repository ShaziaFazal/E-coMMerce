/* eslint-disable react/prop-types */
import Footer from "../Footer/Footer";
import MainBar from "../MainBar/MainBar";
import axios from "axios";

const HeaderOnlyLayout = (props) => {
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
    window.location.reload();
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
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
      <div className="fixed z-10 w-full border-b">
        <MainBar
          handleLogOut={handleLogOut}
          handleLogIn={handleLogIn}
          handleSignUp={handleSignUp}
        />
      </div>

      <div className="pt-[30px]">{props.children}</div>
      <Footer />
    </div>
  );
};

export default HeaderOnlyLayout;
