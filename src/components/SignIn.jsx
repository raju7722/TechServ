"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  BidBrainPostLogo,
  BidBrainPreLogo,
  CheckIcon,
  ContractAILogo,
  EyeIcon,
  LockIcon,
  MailIcon,
  TechServLogowhite,
} from "./ui/Icons";
import signinBg from "../../assets/signin-bg.png";

const signInConfig = {
  "bidbrain-pre": {
    ProductLogo: BidBrainPreLogo,
    title: "Welcome back",
    description: "Sign in to your BidBrain Pre dashboard",
    emailLabel: "Email Address",
    emailPlaceholder: "admin@techserv.ai",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
  },
  "bidbrain-post": {
    ProductLogo: BidBrainPostLogo,
    title: "Welcome to BidBrain Post",
    description: "Sign in to manage post-sales workflows",
    emailLabel: "Email Address",
    emailPlaceholder: "postsales@techserv.ai",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
  },
  "contract-ai": {
    ProductLogo: ContractAILogo,
    title: "Welcome back",
    description: "Sign in to your ContractAI dashboard",
    emailLabel: "Email Address",
    emailPlaceholder: "admin@techserv.ai",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
  },
};

export default function SignIn({ type }) {
  const [rememberMe, setRememberMe] = React.useState(false);
  const config = signInConfig[type] || signInConfig["contract-ai"];
  const ProductLogo = config.ProductLogo;
  const isBidBrainPre = type === "bidbrain-pre";

  return (
    <main className="grid min-h-screen grid-cols-1 overflow-hidden bg-[#f8f9fc] font-poppins text-[#151927] lg:grid-cols-[52%_48%]">
      <section
        className={`relative min-h-[430px] overflow-hidden px-[34px] py-[38px] text-white max-lg:min-h-[520px] max-md:px-6 max-md:py-7 ${
          isBidBrainPre
            ? "bg-[linear-gradient(180deg,_#4B00DA_0%,_#4C10CF_48%,_#8F5DF6_100%)]"
            : "bg-cover"
        }`}
        style={!isBidBrainPre ? { backgroundImage: `url(${signinBg.src})` } : undefined}
      >
        <div className="relative z-10 flex items-start justify-between gap-6">
          <Link href="/" aria-label="Go to homepage">
            <TechServLogowhite />
          </Link>
          <div className="pt-[1px] text-left text-white">
            <ProductLogo />
          </div>
        </div>

        {isBidBrainPre ? (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] opacity-[0.23] [background-image:radial-gradient(circle,_rgba(255,255,255,0.55)_1.5px,_transparent_1.6px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_60%_70%,_black_0%,_transparent_68%)]" />
            <div className="relative z-10 ml-[82px] mt-[132px] max-w-[650px] max-xl:ml-10 max-md:ml-0 max-md:mt-28">
              <h1 className="max-w-[640px] text-[56px] font-light leading-[1.18] tracking-[0.02em] text-white max-xl:text-[48px] max-md:text-[38px]">
                Don't Just Respond -<br />
                <span className="font-extrabold">Dominate.</span>
              </h1>
              <p className="mt-[30px] max-w-[660px] text-[22px] font-normal leading-[1.42] tracking-[0.01em] text-white/90 max-xl:text-[19px] max-md:text-[16px]">
                With velocity, security, compliance and measurable ROI. No compromise
              </p>
              <span className="mt-[30px] block h-[3px] w-[108px] bg-white/35" />

              <div className="mt-[96px] flex items-center gap-[10px] text-[16px] font-bold text-white max-md:mt-16">
                Our Features
                <span className="text-[22px] font-normal leading-none">&rarr;</span>
              </div>

              <div className="mt-[22px] grid max-w-[780px] grid-cols-2 gap-[50px] max-xl:gap-7 max-md:grid-cols-1">
                <div className="min-h-[280px] rounded-[24px] border border-white/12 bg-white/[0.06] px-[54px] pt-[58px] text-white backdrop-blur-sm max-xl:px-8 max-xl:pt-10 max-md:min-h-[220px]">
                  <span className="grid h-[46px] w-[46px] place-items-center rounded-[8px] bg-white/12 text-[24px] font-bold text-white">â†¯</span>
                  <h2 className="mt-[24px] text-[19px] font-extrabold leading-none tracking-[0.03em]">10x Faster RFP Cycles</h2>
                  <p className="mt-[15px] max-w-[270px] text-[16px] font-normal leading-[1.55] tracking-[0.02em] text-white/92">
                    Automate drafts, cut response time by up to 90%, and scale bids without extra workload.
                  </p>
                </div>
                <div className="min-h-[280px] rounded-[24px] border border-white/12 bg-white/[0.06] px-[54px] pt-[58px] text-white backdrop-blur-sm max-xl:px-8 max-xl:pt-10 max-md:min-h-[220px]">
                  <span className="grid h-[46px] w-[46px] place-items-center rounded-[8px] bg-white/12 text-[24px] font-bold text-white">â†—</span>
                  <h2 className="mt-[24px] text-[19px] font-extrabold leading-none tracking-[0.03em]">Increase Bid-to-Win Ratio</h2>
                  <p className="mt-[15px] max-w-[270px] text-[16px] font-normal leading-[1.55] tracking-[0.02em] text-white/92">
                    Boost win rates with AI insights, tailored responses, and predictable deal flow.
                  </p>
                </div>
              </div>

              <div className="mt-[60px] flex justify-center gap-[10px] max-md:mt-8">
                <span className="h-[10px] w-[10px] rounded-full bg-white/30" />
                <span className="h-[10px] w-[10px] rounded-full bg-white/15" />
                <span className="h-[10px] w-[10px] rounded-full bg-white/15" />
              </div>
            </div>
          </>
        ) : (
          <div className="relative z-10 mt-[300px] max-w-[780px] max-lg:mt-52 max-md:mt-36">
            <h1 className="max-w-[720px] text-[52px] font-semibold leading-[1.2] tracking-[0.03em] text-white max-xl:text-[52px] max-md:text-[38px]">
              AI-Powered Contract Intelligence
            </h1>
            <p className="mt-[26px] max-w-[760px] text-lg font-normal leading-[1.55] tracking-[0.01em] text-white/90 max-md:text-[16px]">
              Extract clauses, assess risks, and analyze contracts in seconds &ndash; powered by advanced AI built for modern legal and business teams.
            </p>
          </div>
        )}
      </section>

      <section className="flex min-h-screen items-center justify-center px-10 py-12 max-md:min-h-0 max-md:px-5">
        <div className="w-full max-w-[632px]">
          {!isBidBrainPre && (
            <span className="inline-flex h-[36px] items-center gap-[10px] rounded-[16px] border border-[#5000FE1A] bg-[#5000FE14] px-[13px] text-[12px] font-semibold text-[#5000FE]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#5000FE]" />
              Secure Login
            </span>
          )}

          <h2 className={`${isBidBrainPre ? "" : "mt-[40px]"} text-[28px] font-bold leading-none tracking-[-0.02em] text-[#101828]`}>{config.title}</h2>
          <p className="mt-[18px]  font-normal tracking-[0.01em] text-[#636D7E]">{config.description}</p>

          <form className="mt-[38px]">
            <label className="block text-[15px] font-medium tracking-[0.01em] text-[#465164]" htmlFor="email">
              {config.emailLabel}
            </label>
            <div className="mt-[9px] flex h-[51px] items-center rounded-[12px] border border-[#dfe4ea] bg-white px-[17px]">
              <MailIcon className="h-[18px] w-[18px] shrink-0 text-[#697587]" strokeWidth={1.8} />
              <input
                id="email"
                type="email"
                placeholder={config.emailPlaceholder}
                className="ml-[14px] h-full min-w-0 flex-1 border-0 bg-transparent text-[15px] font-normal text-[#151927] outline-none placeholder:text-[#636D7ECC]"
              />
            </div>

            <div className="mt-[20px] flex items-center justify-between">
              <label className="block text-[14px] font-medium tracking-[0.01em] text-[#4A5565]" htmlFor="password">
                {config.passwordLabel}
              </label>
              <a href="#" className="text-[12px] font-medium text-[#4f00fe]">
                Forgot password?
              </a>
            </div>
            <div className="mt-[9px] flex h-[51px] items-center rounded-[12px] border border-[#dfe4ea] bg-white px-[17px]">
              <LockIcon className="h-[18px] w-[18px] shrink-0 text-[#697587]" strokeWidth={1.8} />
              <input
                id="password"
                type="password"
                placeholder={config.passwordPlaceholder}
                className="ml-[14px] h-full min-w-0 flex-1 border-0 bg-transparent text-[15px] font-normal text-[#151927] outline-none placeholder:text-[#636D7ECC]"
              />
              <EyeIcon className="h-[18px] w-[18px] shrink-0 text-[#8b95a5]" strokeWidth={1.8} />
            </div>

            <label className="mt-[18px] flex items-center gap-[10px] text-[15px] font-medium lowercase tracking-[0.01em] text-[#687386] cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="sr-only"
              />
              <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${rememberMe ? "border-blue-500 bg-blue-500" : "border-gray-400 bg-transparent"}`}>
                {rememberMe && <CheckIcon className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
              </span>
              remember me
            </label>

            <button
              type="submit"
              className="mt-[18px] flex h-[51px] w-full items-center justify-center gap-[12px] rounded-[8px] bg-[linear-gradient(108deg,_#5000FE_0%,_#9664FA_100%)] text-[15px] font-semibold text-white shadow-none"
            >
              Sign In
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </button>
          </form>

          <p className="mt-[38px] text-center text-[15px] font-normal tracking-[0.01em] text-[#687386]">
            Don't have an account? <a href="#" className="font-semibold text-[#4f00fe]">Create account</a>
          </p>
        </div>
      </section>
    </main>
  );
}
