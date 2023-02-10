import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { BsCart4 } from "react-icons/bs";
import { RiRadioButtonLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useNetwork();
  const navigationPages = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact-us" },
  ];
  return (
    <>
      <div className="mt-1 flex bg-orange-400 rounded-3xl shadow-md justify-between items-center">
        <div>
          <img className="pl-4 w-20" src={logo} alt="logo" />
        </div>

        <div>
          {/* <img src={user} alt="logo" /> */}
          <ul className="pr-2 flex">
            {isLoggedIn && (
              <>
                {navigationPages.map((item) => {
                  return (
                    <li className="p-1 m-1 bg-orange-200 cursor-pointer rounded-md">
                      <Link to={item.to}>{item.name}</Link>
                    </li>
                  );
                })}
                <li className="p-1 m-1 bg-orange-200 cursor-pointer rounded-md">
                  <BsCart4 />
                </li>
              </>
            )}
            <li className="p-1 m-1 bg-orange-200 cursor-pointer rounded-md">
              <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
            <li
              className="p-1 m-1 bg-orange-200 cursor-pointer rounded-md"
              style={{ color: isOnline ? "green" : "red" }}
            >
              <RiRadioButtonLine style={{ top: "3px", position: "relative" }} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
