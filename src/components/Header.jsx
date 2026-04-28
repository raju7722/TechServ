import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  NotificationBellIcon,
  UserAvatar,
} from "./ui/Icons";

const userAvatarSrc =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    function handlePointerDown(event) {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
        setIsMobileNavOpen(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`sticky top-0  z-[9999] w-full transition-all duration-300 ease-out`}
    >
      <div className="mx-auto w-full max-w-[1580px] px-3 sm:px-6 md:px-10 lg:px-8">
        <div
          className={`flex items-center relative top-0 justify-between transition-all gap-3 border py-0 duration-300 sm:gap-6 p-2 ${isScrolled
              ? "rounded-full border-white/70 backdrop-blur-2xl backdrop-saturate-150 top-3  h-[60px] shadow-[0_14px_28px_rgba(80,0,254,0.14)] bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.38))]"
              : "border-transparent h-[100px] bg-transparent shadow-none"
            }`}
        >
          <div className={`transition-all 
          
          ${isScrolled
              ? "scale-[1]  origin-top-left mt-0"
              : " scale-[1.2] origin-top-left -mt-2"
            }`
            }>
            <Link aria-label="TechServ home" className="inline-flex items-center" href="https://techserv.ai/">
              <Logo />
            </Link>
          </div>
          {/* <nav className="hidden items-center gap-10 text-[16px] font-medium text-[#171827] lg:flex">
          <a href="#dashboard">Dashboard</a>
          <a href="#analytics">Analytics</a>
          <a href="#settings">Settings</a>
          <NotificationBellIcon className="h-6 w-6" strokeWidth={1.8} />
          <div ref={profileMenuRef} className="relative">
            <button
              type="button"
              className="flex items-center gap-4 rounded-full bg-transparent text-[#171827] outline-none"
              aria-haspopup="menu"
              aria-expanded={isProfileOpen}
              onClick={() => setIsProfileOpen((isOpen) => !isOpen)}
            >
              <UserAvatar
                src={userAvatarSrc}
                alt="Sarah Johnson"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span>Sarah Johnson</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileOpen && (
              <div
                role="menu"
                className="absolute right-0 top-[58px] w-[230px] overflow-hidden rounded-[12px] border border-slate-100 bg-white py-2 text-[14px] font-medium text-[#171827] shadow-[0_18px_45px_rgba(35,31,75,0.16)]"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="block w-full px-5 py-3 text-left hover:bg-violet-50"
                >
                  Profile
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="block w-full px-5 py-3 text-left hover:bg-violet-50"
                >
                  Account Settings
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="block w-full px-5 py-3 text-left hover:bg-violet-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-[#171827] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileNavOpen}
          onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
        >
          {isMobileNavOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button> */}
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="absolute left-4 right-4 top-[82px] rounded-[18px] border border-slate-100 bg-white p-4 text-[15px] font-medium text-[#171827] shadow-[0_18px_45px_rgba(35,31,75,0.16)] lg:hidden">
          <a className="block rounded-[12px] px-4 py-3 hover:bg-violet-50" href="#dashboard">
            Dashboard
          </a>
          <a className="block rounded-[12px] px-4 py-3 hover:bg-violet-50" href="#analytics">
            Analytics
          </a>
          <a className="block rounded-[12px] px-4 py-3 hover:bg-violet-50" href="#settings">
            Settings
          </a>
          <div className="mt-2 flex items-center gap-4 border-t border-slate-100 px-4 pt-4">
            <UserAvatar
              src={userAvatarSrc}
              alt="Sarah Johnson"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span>Sarah Johnson</span>
          </div>
        </div>
      )}
    </header>
  );
}
