import Home from "@/assets/Icon/Home";
import Users from "@/assets/Icon/Users";
import Location from "@/assets/Icon/Location";
import Connect from "@/assets/Icon/Connect"
import img1 from "../../assets/Images/quickdraw.png";
import img2 from "../../assets/Images/pullshark.png";
import Image from "next/image";
import profile from "@/assets/Images/profile_big.png"
const SideBar = () => {
  return (
    <div className="container">
      <aside className="pt-[42px] w-[296px]">
        <div className="flex flex-col gap-y-[18px]">
          <div className="w-[296px] h-[296px] bg-slate-500 rounded-full relative">
            <Image
              src={profile}
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
              jumanazar
            </h2>
            <p className="text-[20px] tracking-[-0.4px] text-[#6E7681]">
              uzicha frontendchi
            </p>
          </div>

          <button className="text-[#C2CAD1] rounded-[5px] bg-[#21262D] text-[14px] font-bold h-[32px]">
            Edit profile
          </button>

          <p className="text-[#C2CAD1] text-[16px] ">
            I’m a student and Frontend developer. 😎 Let’s Rock!!
          </p>

          <div className="flex items-center text-[#C2CAD1] font-semibold text-[14px]">
            <Users /> <span className="mx-2">1 followers</span>{" "}
            <span>1 following</span>
          </div>
          <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
            <Location /> <span className="ml-1">Tashkent, Uzbekistan </span>
          </div>

          <div className="flex items-center text-[#C2CAD1] text-[14px] font-semibold">
            <Connect /> <span className="ml-1">jumanazar.com</span>
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
    </div>
  );
};

export default SideBar;