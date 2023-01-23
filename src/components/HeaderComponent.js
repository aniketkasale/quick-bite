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
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="right-nav">
          {/* <img src={user} alt="logo" /> */}
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link className="link" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link" to={"/contact-us"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <BsCart4 className="cart" />
                </li>
              </>
            )}
            <li>
              <button
                className="auth-btn"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
            <li style={{ color: isOnline ? "green" : "red" }}>
              <RiRadioButtonLine style={{ top: "3px", position: "relative" }} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
