import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux"; // Added useDispatch import
import axios from "axios";
// import { onLogout } from "../api/auth";
// import { unauthenticateUser } from "../redux/slices/authSlice";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { IoCloseOutline } from "react-icons/io5";
// import { clearCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import { Button, Popup } from "pixel-retroui";

const Navbar = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // const { isLogin } = useSelector((state) => state.auth);
  // const dispatch = useDispatch(); // Added useDispatch hook

  // const cart = useSelector((state) => state.cart);

  // const navigate = useNavigate();

  // const toPage = (link) => {
  //   navigate(link)
  // }

  const resLinks = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "EVENTS",
      link: "/events",
    },

    {
      id: 3,
      name: "OUR TEAM",
      link: "/team",
    },
    {
      id: 4,
      name: "CONTACT US",
      link: "/contact",
    },

    {
      id: 5,
      name: "YOUR CART",
      link: "/cart",
    },

    {
      id: 6,
      name: "LOGIN",
      link: "/login",
    },
  ];

  // useEffect(() => {
  //   let t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "body",
  //       start: "0% 0%",
  //       end: "20% 10%",
  //       scrub: true,
  //     },
  //   });

  //   t1.to(
  //     ".navbar",
  //     {
  //       height: "10vh",
  //       backdropFilter: "blur(10px)",
  //       ease: "expo.inOut",
  //       duration: 2,
  //       delay: 0.5,
  //     },
  //     "nav"
  //   );
  //   t1.to(
  //     ".nav-mid",
  //     {
  //       fontSize: "0.8vw",
  //       ease: "expo.inOut",
  //       duration: 0.9,
  //       delay: 0.5,
  //     },
  //     "nav"
  //   );
  //   // gsap.from(
  //   //   ".nav-mid a",
  //   //   {
  //   //     y: "-10vh",
  //   //     stagger: 0.2,
  //   //     ease: "power1.inOut",
  //   //     duration: 0.9,
  //   //   },
  //   //   "nav"
  //   // );
  // }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [menuClick, setMenuClick] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  // Function to handle window resize for mobile responsiveness
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  // Add an event listener for window resizing
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   // Menu open animation
  //   if (menuClick) {
  //     let t1 = gsap.timeline();
  //     t1.to(
  //       ".resNav",
  //       {
  //         right: "0%",
  //         ease: "power1.inOut",
  //         duration: 0.4,
  //         delay: 0.2,
  //       },
  //       "one"
  //     )
  //     .from(".res-links h2", {
  //       y: "10vh",
  //       stagger: 0.2,
  //       duration: 0.6,
  //       ease: "power1.inOut",
  //     });
  //   } else {
  //     // Menu close animation
  //     gsap.to(".menuBtn", {
  //       ease: "power1.inOut",
  //       duration: 0.8,
  //     });

  //     gsap.to(".resNav", {
  //       right: isMobile ? "-100%" : "-50%",  // Responsively handle the sidebar
  //       ease: "power1.inOut",
  //       duration: 0.4,
  //       delay: 0.2,
  //     });
  //   }
  // }, [menuClick, isMobile]);

  // useEffect(() => {
  //   const menuBtn = document.querySelector(".menuBtn");

  //   menuBtn.addEventListener("mouseenter", () => {
  //     gsap.to(".menuBtn", {
  //       ease: "power1.inOut",
  //     });
  //   });

  //   menuBtn.addEventListener("mouseleave", () => {
  //     gsap.to(".menuBtn", {
  //       border: "",
  //       ease: "power1.inOut",
  //     });
  //   });
  // }, []);

  // const toCart = () => {
  //   navigate("/cart");
  // };

  // const handleLogout = async () => {
  //   try {

  //     dispatch(unauthenticateUser()); // Dispatch the unauthentication action after successful logout
  //     dispatch(clearCart());
  //     navigate("/login");
  //     toast.success("Logged out Successfully");
  //     await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {}, { withCredentials: true });

  //   } catch (error) {
  //     toast.error("Error Logging out");
  //   }
  // };

  return (
    <>
      <div className="navbar md:h-[15vh] w-[100%] bg-transparent flex md:justify-between items-center fixed top-0 left-0 z-[7000] max-md:justify-between max-md:h-[13vh] ">
        <div className="nav-left h-full w-[20%] flex justify-center items-center max-sm:w-[30%]">
          <Link
            to="/"
            className="homeLogo text-black text-[2vw] max-sm:text-[3vh] font-extralight"
          >
            CREDENZ
          </Link>
        </div>
        {/* <div className="nav-mid  h-full w-[60%] flex justify-center items-center gap-[100px] text-white max-md:hidden text-[1vw]">
          <Link to="/events">EVENTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/team">TEAM</Link>
          <Link to="/contact">CONTACT</Link>
        </div> */}
        <div className="nav-right h-full bg--300 w-[15%] flex justify-evenly items-center">
          <Button
            onClick={openPopup}
            // className="menuBtn  "
            type="button"
            bg="#fefcd0"
            textColor="#152742"
            borderColor="#152742"
            shadowColor="#c381b5"
            className="menuBtn z-[7000]  px-[1vw] py-[0vh]"
          >
            {openPopup ? (
              <h1 className="menuBtn font-bold text-[15px]">MENU</h1>
            ) : (
              <IoCloseOutline size={25} color="black" />
            )}
          </Button>
          <Popup
            isOpen={isPopupOpen}
            onClose={closePopup}
            bg="#fefcd0"
            baseBg="#c381b5"
            textColor="black"
            borderColor="black"
          >
            {/* <h1 className="font-bold text-[#fff3d4] text-[25px] text-center px-[2vw] py-[2vh] custom-outline2 custom-shadow2 " >MENU</h1> */}

            <svg
              viewBox="0 0 500 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="50"
                fill="#fff3d4"
                stroke="#101e34"
                strokeWidth="10"
                paintOrder="stroke fill"
                className="custom-shadow2 font-bold"
              >
                MENU
              </text>
            </svg>
            <div className="nav-options flex flex-col justify-center items-center px-[3vw] ">
              {resLinks.map((items) => {
                return (
                  <>
                    <Link className=" text-[20px] py-[0.5vh]">
                      {items.name}
                    </Link>
                  </>
                );
              })}
            </div>
          </Popup>

          {/* {isLogin ? (
            <Link
              onClick={handleLogout}
              className="max-lg:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular"
            >
              LOGOUT
            </Link>
          ) : (
            <Link
              to="/login"
              className="max-lg:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular"
            >
              LOGIN
            </Link>
          )} */}
        </div>
      </div>

      <div className="resNav z-[6000] fixed top-0 right-[-50%] h-[100%] w-[50%] max-md:w-[100%] max-md:right-[-100%] bg-[#181818] backdrop-blur-[30px] flex flex-col justify-center items-center ">
        <div className="res-links h-[80%] w-full px-[3vw] bg--500 flex flex-col justify-center items-center">
          {/* {resLinks.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  toPage(item.link);
                  setMenuClick(!menuClick);
                }}
                className="linkBox hover:bg-white hover:text-black hover:rounded-[1vh] overflow-hidden max-md:h-[10vh] h-[20vh] w-full bg--700 flex justify-end items-end border-b-[#333333] border-solid border-b-[1px] text-white"
              >
                <h2 className="text-[2.2vw] max-md:text-[5vh]">{item.name}</h2>
              </button>
            );
          })} */}
          {/* {isLogin && <button
           onClick={() => {
                  toPage('/dashboard');
                  setMenuClick(!menuClick);
                }} className="linkBox hover:bg-white hover:text-black hover:rounded-[1vh] overflow-hidden max-md:h-[10vh] h-[20vh] w-full bg--700 flex justify-end items-end border-b-[#585858] border-solid border-b-[1px] text-white text-[2.2vw] max-md:text-[5vh]">
                  <h2 className="text-[2.2vw] max-md:text-[5vh]">DASHBOARD</h2>
              </button>
            } */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
