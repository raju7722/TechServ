"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  BidBrainIcon,
  CalculatorIcon,
  CalendarDaysIcon,
  CheckIcon,
  ContractIcon,
  DeliveryPlanIcon,
  FlagIcon,
  RocketIcon,
  SearchIcon,
  SparklesIcon,
  UsersIcon,
  FileOutline,
} from "./components/ui/Icons";
import BidBrainPost from "../assets/BidBrainPost.svg";
import BidBrainPre from "../assets/BidBrainPre.svg";
import ContractAI from "../assets/ContractAI.svg";
import Footer from "./components/Footer";
import Header from "./components/Header";

const agents = [
  {
    title: "BidBrain",
    suffix: "Pre",
    tag: "Sales & Pipeline Agent",
    icon: BidBrainIcon,
    button: `Launch BidBrain`,
    buttontext: `Pre`,
    description:
      "Advanced presales and post-sales AI agent that helps you win more deals and retain customers with intelligent insights and automated workflows.",
    features: ["Proposal Generation", "Client Communication", "Deal Analytics"],
    terminal: "bidbrain_terminal",
    type: "sales",
    loginPath: "/login/bidbrain-pre",
    logoImage: BidBrainPre,
  },
  {
    title: "BidBrain",
    suffix: "Post",
    tag: "Sales & Pipeline Agent",
    icon: BidBrainIcon,
    button: "Launch BidBrain",
    buttontext: "Post",
    description:
      "Advanced presales and post-sales AI agent that helps you win more deals and retain customers with intelligent insights and automated workflows.",
    features: ["Proposal Generation", "Client Communication", "Deal Analytics"],
    terminal: "bidbrain_terminal",
    type: "sales",
    loginPath: "/login/bidbrain-post",
    logoImage: BidBrainPost,
  },
  {
    title: "Contract",
    suffix: "ai",
    tag: "Legal & Compliance Agent",
    icon: ContractIcon,
    button: "Launch Contract",
    buttontext: "ai",
    description:
      "Intelligent contract management agent that automates contract creation, review, and compliance monitoring with advanced legal AI capabilities.",
    features: ["Contract Analysis", "Risk Assessment", "Compliance Tracking"],
    terminal: "contract_analyzer.exe",
    type: "legal",
    loginPath: "/login/contract-ai",
    logoImage: ContractAI,
  },
];

const upcoming = [
  {
    icon: RocketIcon,
    title: "ProjectX",
    desc: "Talent acquisition and employee management",
    color: "text-orange-600",
    bg: "bg-orange-50",
    pill: "bg-orange-50 text-orange-600",
  },
  {
    icon: FlagIcon,
    title: "MarketingOS",
    desc: "Financial planning and analysis",
    color: "text-pink-500",
    bg: "bg-pink-50",
    pill: "bg-pink-50 text-pink-500",
  },
  {
    icon: CalculatorIcon,
    title: "AccountOS",
    desc: "Campaign optimization and content creation",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    pill: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: UsersIcon,
    title: "HR Assistant",
    desc: "Process automation and optimization",
    color: "text-orange-500",
    bg: "bg-orange-50",
    pill: "bg-orange-50 text-orange-600",
  },
  {
    icon: SparklesIcon,
    title: "ConsultAI",
    desc: "Process automation and optimization",
    color: "text-violet-500",
    bg: "bg-violet-50",
    pill: "bg-violet-50 text-violet-500",
  },
];

function AgentCard({ agent }) {
  const router = useRouter();
  const Icon = agent.icon;
  const logoSrc = typeof agent.logoImage === "string" ? agent.logoImage : agent.logoImage.src;
  const handleLaunch = () => {
    router.push(agent.loginPath);
  };

  return (
    <article className="agent-card w-full overflow-hidden rounded-[6px] shadow-card">
      <div className="agent-card-content px-8 pb-6 pt-8 max-md:px-5 max-md:pt-6">
        <div className="mb-5 flex items-start gap-4 max-md:gap-3">
          <div className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[8px] bg-white shadow-sm max-md:h-11 max-md:w-11">
            <Icon className="h-6 w-6 text-violet-500 max-md:h-5 max-md:w-5" strokeWidth={2} />
          </div>
          <div className="min-w-0 pt-1">
            <img src={logoSrc} alt="Card Logo" className="h-full w-[150px] object-contain" />
          </div>
          <span className="ml-auto mt-1 flex h-[26px] min-w-[80px] items-center justify-center gap-2 rounded-full bg-white px-4 text-[11px] font-semibold text-emerald-600 max-md:min-w-[68px] max-md:px-3">
            <span className="h-[6px] w-[6px] rounded-full bg-emerald-500" />
            Ready
          </span>
        </div>
        <p className="mb-5 min-h-[66px] text-sm font-normal leading-[1.5] tracking-[-0.01em] text-[#2d2f3b] max-md:min-h-0">
          {agent.description}
        </p>
        <ul className="mb-6 space-y-3 text-sm text-[#242633]">
          {agent.features.map((feature) => (
            <li key={feature} className="flex items-center gap-4">
              <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#dce7ff] text-violet-500">
                <CheckIcon className="h-3 w-3" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button type="button" className="h-[58px] w-full rounded-[12px] bg-[linear-gradient(108deg,_#5000FE_0%,_#9664FA_100%)] font-bold text-white max-md:h-12 shadow-[0_18px_40px_0_rgba(80,_0,_254,_0.24)]" onClick={handleLaunch}>
          {agent.button}
          <span className="italic font-light">
            {agent.buttontext}
          </span>
        </button>
      </div>
    </article>
  );
}

function ComingSoonCard({ item }) {
  const Icon = item.icon;
  return (
    <article className="flex h-[280px] flex-col items-center rounded-[28px] border border-[#ddd0ff] bg-white px-8 pt-9 text-center shadow-soft max-md:h-auto max-md:min-h-[230px] max-md:px-6 max-md:py-7">
      <div className={`grid h-[70px] w-[70px] place-items-center rounded-[13px] max-md:h-14 max-md:w-14 ${item.bg}`}>
        <Icon className={`h-8 w-8 max-md:h-6 max-md:w-6 ${item.color}`} strokeWidth={2} />
      </div>
      <h3 className="mt-5 font-semibold text-[#1E293B]">{item.title}</h3>
      <p className="mb-5 mt-2 line-clamp-2 text-sm font-medium leading-[1.45] text-[#282828]">{item.desc}</p>
      <span className={`rounded-full px-6 py-2 text-[14px] font-bold ${item.pill}`}>Coming Soon</span>
    </article>
  );
}

function QuickActionCards() {
  return (
    <div className="relative z-10 grid auto-rows-fr grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="flex h-full max-h-[250px] min-h-[200px] flex-col overflow-hidden rounded-[28px] bg-[#f8f4ff] p-5 shadow-[0_18px_45px_rgba(60,32,134,0.11)] max-md:max-h-none max-md:min-h-[230px]">
        <div className="mb-4 flex shrink-0 items-center gap-6 max-md:gap-4">
          <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-[9px] bg-blue-500 text-white shadow-lg shadow-blue-500/25 max-md:h-12 max-md:w-12">
            <FileOutline className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-[18px] font-bold text-[#202332]">Create Proposal</h3>
            <p className="mt-1 text-[14px] text-slate-500">Generate with BidBrain</p>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden rounded-[10px] h-auto bg-white/45 px-5 py-5">
          <p className="mb-3 flex items-center gap-3 text-[15px] font-medium text-[#202332]">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Proposal Draft
          </p>
          <div className="rounded-[6px] bg-white px-3 py-3">
            <div className="h-[5px] w-[78%] rounded-full bg-blue-200" />
            <div className="mt-3 h-[5px] w-[52%] rounded-full bg-blue-100" />
          </div>
          <p className="mt-4 text-[14px] text-slate-500">✧ AI generating...</p>
        </div>
      </article>

      <article className="flex h-full max-h-[250px] min-h-[250px] flex-col overflow-hidden rounded-[28px] bg-[#f8f4ff] p-5 shadow-[0_18px_45px_rgba(60,32,134,0.11)] max-md:max-h-none max-md:min-h-[230px]">
        <div className="mb-4  flex shrink-0 items-center gap-6 max-md:gap-4">
          <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-[9px] bg-violet-500 text-white shadow-lg shadow-violet-500/25 max-md:h-12 max-md:w-12">
            <SearchIcon className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-[18px] font-bold text-[#202332]">Review Contract</h3>
            <p className="mt-1 text-[14px] text-slate-500">Analyze with ContractAI</p>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden rounded-[10px] bg-white/45 px-5 py-4">
          <p className="mb-3 flex min-w-0 items-center gap-2 text-[15px] font-medium text-[#3f4050]">
            <ContractIcon className="h-4 w-4 text-violet-500" />
            <span className="min-w-0 truncate">Service_Agreement_v2.pdf</span>
          </p>
          <p className="mb-3 flex min-w-0 items-center gap-2 text-[15px] text-slate-500">
            <span className="grid h-4 w-4 place-items-center rounded-full border border-emerald-500 text-[10px] text-emerald-500">✓</span>
            <span className="min-w-0 truncate">Clause analysis complete</span>
          </p>
          <p className="mb-4 flex min-w-0 items-center gap-2 text-[15px] text-slate-500">
            <span className="grid h-4 w-4 place-items-center rounded-full border border-amber-500 text-[10px] text-amber-500">!</span>
            <span className="min-w-0 truncate">2 risks identified</span>
          </p>
          <div className="h-[6px] rounded-full bg-white">
            <div className="h-full w-[86%] rounded-full bg-violet-500" />
          </div>
        </div>
      </article>

      <article className="flex h-full max-h-[250px] min-h-[250px] flex-col overflow-hidden rounded-[28px] bg-[#f8f4ff] p-5 shadow-[0_18px_45px_rgba(60,32,134,0.11)] max-md:max-h-none max-md:min-h-[230px]">
        <div className="mb-4  flex shrink-0 items-center gap-6 max-md:gap-4">
          <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-[9px] bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 max-md:h-12 max-md:w-12">
            <DeliveryPlanIcon className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-[18px] font-bold text-[#202332]">Generate Delivery Plan</h3>
            <p className="mt-1 text-[14px] text-slate-500">Plan delivery timelines with AI</p>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden rounded-[10px] bg-white/45 px-5 py-4">
          <p className="mb-3 flex min-w-0 items-center gap-2 text-[15px] font-medium text-[#3f4050]">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            <span className="min-w-0 truncate">Delivery Timeline</span>
          </p>
          <p className="mb-3 flex min-w-0 items-center gap-2 text-[15px] text-slate-500">
            <span className="grid h-4 w-4 place-items-center rounded-full border border-cyan-500 text-[10px] text-cyan-500">✓</span>
            <span className="min-w-0 truncate">Task Breakdown</span>
          </p>
          <p className="mb-4 flex min-w-0 items-center gap-2 text-[15px] text-slate-500">
            <span className="grid h-4 w-4 place-items-center rounded-full border border-amber-500 text-[10px] text-amber-500">!</span>
            <span className="min-w-0 truncate">Resource Allocation</span>
          </p>
          <p className="mt-4 text-[14px] text-slate-500">✧ AI generating...</p>
        </div>
      </article>

      <article className="flex h-full max-h-[250px] min-h-[250px] flex-col overflow-hidden rounded-[28px] bg-[#f8f4ff] p-5 shadow-[0_18px_45px_rgba(60,32,134,0.11)] max-md:max-h-none max-md:min-h-[230px]">
        <div className="mb-4 flex shrink-0 items-center gap-6 max-md:gap-4">
          <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-[9px] bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 max-md:h-12 max-md:w-12">
            <CalendarDaysIcon className="h-6 w-6 max-md:h-5 max-md:w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-[18px] font-bold text-[#202332]">Schedule Demo</h3>
            <p className="mt-1 text-[14px] text-slate-500">Book a session</p>
          </div>
        </div>
        <div className="mb-6 flex min-h-0 items-center gap-5 overflow-hidden rounded-[10px] bg-[#f0f7fb] px-5 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-emerald-200 bg-white text-[12px] font-bold text-emerald-500">
            24
          </span>
          <div className="min-w-0">
            <p className="text-[15px] font-bold text-[#202332]">Today</p>
            <p className="text-[16px] text-slate-500">2:00 PM - 2:45 PM</p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between text-[15px]">
          <span className="text-[#4a4c61]">4 slots available</span>
          <span className="font-medium text-emerald-600">Book →</span>
        </div>
      </article>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white font-poppins">
      <Header />

      <section className="purple-hero relative pb-[220px] pt-[110px] text-center text-white max-lg:pb-[250px] max-lg:pt-20 max-md:pb-[220px] max-md:pt-16">
        <h1 className="text-[52px] font-light leading-none max-lg:text-[42px] max-md:px-5 max-md:text-[34px]">
          Choose Your <span className="font-extrabold tracking-normal">AI Agent</span>
        </h1>
        <p className="mx-auto mb-[20px] mt-6 max-w-[920px] px-5 text-lg font-normal leading-[1.55] tracking-[0.04em] text-white/88 max-lg:max-w-[720px] max-lg:text-[16px] max-md:text-[14px]">
          Empower your enterprise with specialized AI agents designed to streamline your business processes and drive growth." with "Empower your organization with specialized AI agents designed to streamline your business processes and drive growth.
        </p>
      </section>

      <section className="relative z-10 -mt-[170px] max-lg:-mt-[220px] max-md:-mt-[190px]">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-8 md:grid-cols-2 lg:grid-cols-3 max-md:px-5">
          {agents.map((agent) => (
            <AgentCard key={agent.button} agent={agent} />
          ))}
        </div>
      </section>

      <section className="pb-[96px] pt-[86px] max-lg:pb-20 max-lg:pt-20 max-md:pb-16 max-md:pt-16">
        <div className="mx-auto max-w-[1600px] px-8 text-center max-md:px-5">
          <h2 className="text-[52px] font-light leading-none tracking-[0.03em] text-[#282828] max-lg:text-[42px] max-md:text-[32px]">
            More AI Agents <span className="font-extrabold text-[#5d16ff]">Coming Soon!</span>
          </h2>
          <div className="mt-[74px] grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 max-lg:mt-12">
            {upcoming.map((item) => (
              <ComingSoonCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="quick-gradient relative px-8 pb-[116px] pt-[112px] text-white max-lg:pb-20 max-lg:pt-20 max-md:px-5 max-md:pb-16 max-md:pt-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative z-10 mb-[76px] text-center max-lg:mb-12">
            <h2 className="text-[52px] font-semibold leading-none tracking-[0.04em] max-lg:text-[42px] max-md:text-[34px]">Quick Actions</h2>
            <p className="mt-8 text-[18px] font-normal text-white/70 max-lg:text-[16px] max-md:mt-5 max-md:text-[14px]">
              Get started with common tasks across all AI agents
            </p>
          </div>
          <QuickActionCards />
        </div>
      </section>

      <Footer />
    </main>
  );
}
