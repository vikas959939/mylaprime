import React, {useState} from "react";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import RegForm from "./common/reg-from";
import Social from "./common/social";
import { ToastContainer } from "react-toastify";
// image import
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import Illustration from "@/assets/images/auth/delivery-image.jpg";

const register = () => {
  const [isDark] = useDarkMode();


  return (
    <>
      <ToastContainer />

      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            {/* <div className="w-[100%]  login-bg pt-20 ltr:pl-20 rtl:pr-20">
            <Link to="/">
                <img src="https://corp.lotuss.com.my/images/logo.png" style={{'backgroundColor':'#00BCB5', 'height':'100%'}}  alt="" className="mb-10" />
              </Link>
              <h4>
                Optimize &nbsp;
                <span className="text-slate-800 dark:text-slate-400 font-bold">
                  Delivery
                </span>
              </h4>
            </div> */}
            <div className="absolute left-0 h-full w-full z-[-1]">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="right-column relative bg-white dark:bg-slate-800">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  <Link to="/">
                    <img
                      src={isDark ? LogoWhite : Logo}
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                </div>
                <div className="text-center 2xl:mb-10 mb-5">
                  <h4 className="font-medium">Sign up</h4>
                  <div className="text-slate-500 dark:text-slate-400 text-base">
                    Create an account to start using Services
                  </div>
                </div>
                <RegForm />
                
                
                <div className="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm">
                  Already registered?
                  <Link
                    to="/"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="auth-footer text-center">
                Copyright 2023, LA Prime Library All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
