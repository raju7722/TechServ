import React, { useEffect, useRef, useState } from "react";
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
  const profileMenuRef = useRef(null);

  useEffect(() => {
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

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="relative z-50 h-[96px] bg-white">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-8 max-md:px-5">
        <Logo />
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
