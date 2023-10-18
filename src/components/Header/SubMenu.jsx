import Link from 'next/link';

import {Overview, Repositories,Packages, Projects, Stars} from "@/assets/Icon";

const SubMenu = () => {
  return (
    <div className="flex items-center gap-[340px] mt-[32px]">
      <span></span>
      <div className="flex items-center gap-[40px]">
        <Link
          className="flex item-center gap-[5px] duration-300 border-b-2 border-transparent  hover:border-b-2 hover:border-orange-800"
          href="/"
        >
          <div className="pt-[2px]">
            <Overview />
          </div>
          <p className="text-white text-[16px] font-semibold leading-[24px] font-sans">
            Overview
          </p>
        </Link>
        <Link
          className=" flex item-center gap-[5px] duration-200 border-b-2 border-transparent hover:border-b-2 hover:border-orange-800"
          href="/repositories"
        >
          <div className="py-[2px]">
            <Repositories />
          </div>
          <span className="text-white text-[14px] font-semibold leading-[24px] font-sans">
            Repositories 46
          </span>
        </Link>
        <Link
          className="flex item-center gap-[5px] duration-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-800 "
          href="/projects"
        >
          <div className="py-[2px]">
            <Projects />
          </div>
          <span className="text-white text-[14px] font-semibold leading-[24px] font-sans">
            Projects
          </span>
        </Link>
        <Link
          className="flex item-center gap-[5px] duration-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-800"
          href="/packages"
        >
          <div className="py-[2px]">
            <Packages />
          </div>
          <span className="text-white text-[14px] font-semibold leading-[24px] font-sans">
            Packages
          </span>
        </Link>
        <Link
          className="flex item-center gap-[5px]  duration-300 border-b-2 border-transparent hover:border-b-2 hover:border-orange-800"
          href="/stars"
        >
          <div className="py-[2px]">
            <Stars />
          </div>
          <span className="text-white text-[14px] font-semibold leading-[24px] font-sans">
            Stars 35
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;