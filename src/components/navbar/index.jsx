import React, { useState, useEffect } from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";
import { useNavigate } from "react-router-dom";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { getNotification } from "../../constants/api";

const Navbar = (props) => {
  const [APIdata, setAPIdata] = useState([]);
  const [logIn, setLogin] = useState(false);
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData");
  if (userData && !logIn) {
    setLogin(true);
  }

  useEffect(() => {
    handleGetNotification();
  }, []);

  const handleGetNotification = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(getNotification, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setAPIdata(data.message);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = useState(false);

  const handleLogout = () => {
    if (!logIn) {
      setLogin(!logIn);
      navigate("/auth"); // Navigate to "/auth" when logIn is false
    } else {
      setLogin(!logIn);
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="max-h-[400px] overflow-y-auto">
              <div className="flex flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-base font-bold text-navy-700 dark:text-white">
                    Notifications
                  </p>
                </div>
                {APIdata.length !== 0 &&
                  APIdata.map((data, index) => (
                    <div
                      className="mb-2 flex items-center justify-between rounded-md bg-blue-100 p-3 text-blue-800 dark:bg-blue-800 dark:text-white"
                      key={index}
                    >
                      <div className="flex items-center">
                        <BsArrowBarUp className="text-gray-400 dark:text-white" />
                        <p className="ml-2 text-sm font-bold">{data.message}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex w-56 flex-col items-center rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="flex items-center p-4 text-center text-lg font-bold text-navy-700 dark:text-white">
                {userData
                  ? JSON.parse(userData)?.data?.User?.fullName
                  : "Gravity"}
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />
              <div className="flex flex-col p-4">
                <button
                  className="text-base font-medium text-red-500 transition duration-150 ease-out hover:text-red-500 hover:ease-in"
                  onClick={handleLogout}
                >
                  {logIn ? "LogOut" : "LogIn"}
                </button>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
