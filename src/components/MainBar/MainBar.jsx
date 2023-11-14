import { useState } from "react";
import Model from "../Model/model";
import Dropdown from "../Dropdown/Dropdown";

const MainBar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeSignUpModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogIn && props.handleLogIn(email, password);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    props.handleSignUp && props.handleSignUp(data);
    setData({ username: "", email: "", password: "" });
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const LoginModal = () => {
    return (
      <Model className="h-auto " isOpen={isModalOpen} onClose={closeModal}>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          Sign Up
        </h4>
        <p className="block antialiased font-sans text-base leading-relaxed text-gray-700 mt-1 font-normal whitespace-nowrap">
          Nice to meet you! Enter your details to register.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Login
            </button>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <span
                onClick={handleClick}
                className="text-blue-600 cursor-pointer "
              >
                Sign In
              </span>
            </p>
          </div>
        </form>
      </Model>
    );
  };

  const SignupModal = () => {
    return (
      <Model className="h-auto" isOpen={isOpen} onClose={closeSignUpModal}>
        <form onSubmit={handleSubmitSignUp}>
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
              Submit
            </button>
          </div>
        </form>
      </Model>
    );
  };
  return (
    <nav className="bg-white py-2 px-4 pt-4">
      <div className="flex items-center  sm:items-stretch sm:justify-center md:justify-between   ">
        <a
          rel="noopener noreferrer"
          href="/"
          className="flex justify-center space-x-3 lg:justify-start ml-2"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="self-center text-2xl font-semibold">E-Commerce</span>
        </a>

        <div className="flex gap-3  ">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch rounded border border-solid border-neutral-300 ">
            <input
              type="search"
              className="relative m-0 block min-w-0 flex-auto bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-900"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          {localStorage.getItem("token") ? (
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm "
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={handleMenuToggle}
                >
                  <span className="absolute -inset-1.5"></span>

                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              {isMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    onClick={props.handleLogOut}
                  >
                    Sign out
                  </a>
                  <a
                    href="/cart/shoppingcart"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    My Cart
                  </a>
                </div>
              )}
            </div>
          ) : (
            <button onClick={openModal} className="bg-none pb-3 text-black">
              Login
            </button>
          )}
          {currentUser && (
            <a href="/cart/shoppingcart" className="cart-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.51345 5H1.33325V3H6.15306L7.21972 8.33333H30.5315L27.5012 25H8.51345L4.51345 5ZM7.61972 10.3333L10.1531 23H25.832L28.135 10.3333H7.61972Z"
                  fill="black"
                  data-spm-anchor-id="a2a0e.25546351.dcart.i0.38f846f2N6Ni8q"
                ></path>
                <path
                  d="M11.9999 28C11.9999 28.7364 11.403 29.3333 10.6666 29.3333C9.93021 29.3333 9.33325 28.7364 9.33325 28C9.33325 27.2636 9.93021 26.6667 10.6666 26.6667C11.403 26.6667 11.9999 27.2636 11.9999 28Z"
                  fill="black"
                ></path>
                <path
                  d="M25.3333 29.3333C26.0696 29.3333 26.6666 28.7364 26.6666 28C26.6666 27.2636 26.0696 26.6667 25.3333 26.6667C24.5969 26.6667 23.9999 27.2636 23.9999 28C23.9999 28.7364 24.5969 29.3333 25.3333 29.3333Z"
                  fill="black"
                ></path>
              </svg>
            </a>
          )}

          {LoginModal()}
          {SignupModal()}
        </div>
      </div>
    </nav>
  );
};

export default MainBar;
