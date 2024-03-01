import { NavLink } from "react-router-dom";
import logo from "../../public/images/logo.jpg";
import { useEffect, useState } from "react";
import { useUser } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { displayName, updateUser } = useUser();
  const [loggedIn, setLoggedIn] = useState(!!displayName);

  const handleLogout = () => {
    localStorage.removeItem("UID");
    updateUser(null);
    navigate("/");
    displayName = "";
  };

  useEffect(() => {
    setLoggedIn(!!displayName);
  }, [displayName]);
  return (
    <main className="flex flex-col justify-around pt-2 item-center bg-transparen">
      <div className="flex flex-row justify-around bg-transparent item-center">
        <img className="w-20 h-16" src={logo} alt="" />
        {/* <div>
          <input
            type="search"
            placeholder="Search"
            className="border-b border-white p-2 bg-transparent mr-[-14rem] text-white font-mono"
          />
        </div> */}
        <div className="flex justify-between gap-12 text-white item-center">
          <NavLink to="Home">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">Cart</NavLink>
          <NavLink to="Contact">Contact</NavLink>
          <NavLink to="Profile">{displayName}</NavLink>
          {loggedIn ? (
            <NavLink onClick={handleLogout}>Log out</NavLink>
          ) : (
            <NavLink to="Log-in">Log in</NavLink>
          )}
          {/* // <NavLink to="Log-in">Log in</NavLink> */}
        </div>
      </div>
      <div className="mt-[.5rem]">
        {/* <img src="public\images\d0df2c182922609.6537f68b11f26.jpg" alt="" /> */}
      </div>
    </main>
  );
};

export default Navbar;
