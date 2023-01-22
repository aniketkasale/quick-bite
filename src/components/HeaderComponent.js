import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
                <li><Link className="link" to={'/'}>Home</Link></li>
                <li><Link className="link" to={'/about'}>About</Link></li>
                <li><Link className="link" to={'/contact-us'}>Contact</Link></li>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
