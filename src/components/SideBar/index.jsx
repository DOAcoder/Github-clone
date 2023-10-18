"use client";
import { useEffect, useState } from "react";
import useUsersApi from "@api/Users";
import {Home, Connect, Location, Users} from "@/assets/Icon/Side-bar_Icons";
import img1 from "@images/quickdraw.png";
import img2 from "@images/pullshark.png";
import profile from "@images/profile_big.png";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {


  const [user, setUser] = useState(null);
  const userName = "mukhriddin-dev";


  useEffect(()=>{
    useUsersApi.saerchProfile(userName).then((res)=>{
      console.log(res?.data);
      setUser(res?.data)
    })
  },[userName])







  
  return (
    <aside className="pt-[42px] w-[296px]">
      <div className="flex flex-col gap-y-[18px]">
        <div className="w-[296px] h-[296px] bg-slate-500 rounded-full relative">
          <img
            className=" rounded-full"
            src={user?.avatar_url}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <span className="absolute bottom-[35px] right-[0px] w-[38px] bg-black h-[38px] rounded-full flex items-center justify-center border border-gray-400">
            <Home />
          </span>
        </div>

        <div>
          <h2 className="text-[#C2CAD1] text-[24px] font-semibold">
            {user?.name}
          </h2>
          <p className="text-[20px] tracking-[-0.4px] text-[#6E7681]">
            {user?.login}
          </p>
        </div>

        <button className="text-[#C2CAD1] rounded-[5px] bg-[#21262D] text-[14px] font-bold h-[32px]">
          Edit profile
        </button>

        <p className="text-[#C2CAD1] text-[16px] ">{user?.bio}</p>

        <div className="flex items-center text-[#C2CAD1] font-semibold text-[14px]">
          <Link href="/followers" className="flex items-center">
            <Users /> <span className="mx-2">{user?.followers} followers</span>
          </Link>
          <Link href="/following">
            <span>{user?.following}following</span>
          </Link>
        </div>
        <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
          <Location /> <span className="ml-1">{user?.location} </span>
        </div>

        <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
          <Connect /> <a href={user?.blog} target="_blank" className="ml-1">{user?.blog}</a>
        </div>
        <span className="w-full h-[1px] bg-[#C2CAD1]"></span>

        <div className="flex flex-col">
          <p className="text-[#C2CAD1] text-[18px] font-semibold mb-[8px]">
            Achievements
          </p>
          <div className="flex">
            <Image src={img1} alt="image" />
            <Image src={img2} alt="image" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
