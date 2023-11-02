import MainBar from "../MainBar/MainBar";
import Marquee from "../Marquee/Marquee";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import Modal from "../Modal/modal"
import { useState } from "react";

const DefaultLayout = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [data,setData] = useState({username:"",email:"",password:""});
  const closeModal = ()=>{
    setIsOpen(false);

  } 
  const handleLogIn = async(email, password) => {
    await axios.post('http://localhost:4000/signinSystem/signin/',{email: email,password: password}).then((response)=>console.log(response))
  }

  
  const handleSignUp = () => {
    setIsOpen(true);
    
  }
  const handleChange = (e) => {
    const{name,value}=e.target
    setData({...data,[name]:value})
  }

  const handleSubmit = async()=>{
    try {
      axios.post('http://localhost:4000/signinSystem/signup/',{data}).then((response)=>console.log(response))
    } catch (error) {
     console.log(error); 
    }
  }

  const SignupModal = () => {
    return (
      <Modal className="h-auto" isOpen={isOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your User Name"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Login
            </button>
            <p className="mt-4 text-center"><span onClick={handleSignUp} className="text-blue-600 cursor-pointer" >Sign Up</span>, If you are a new User</p>
            
          </div>
        </form>
      </Modal>
    );
  };




  return (
    <div>
      <Marquee />
      <MainBar handleLogIn={handleLogIn} handleSignUp={handleSignUp}  />
      <Navbar />
      <div>{props.children } {SignupModal()}</div>
      
    </div>
  );
};

export default DefaultLayout;
