import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "../styles/user.scss";
import FileUpload from "../components/FileUpload";
import "../styles/dropdown.scss";
import Addinfo from "../components/Addinfo";

const User = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000/auth",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <Header logout={handleLogout} />
      <div className="home_page">
        <h4>
          {" "}
          Welcome back <span>{username.toUpperCase()}</span>
        </h4>
        

        <FileUpload />
        {/* <Addinfo /> */}

        {/* <button onClick={Logout}>LOGOUT</button> */}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};
export default User;
