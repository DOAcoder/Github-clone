import Link from 'next/link';
import Logo from '@/assets/Icon/Logo';
import Bell from "@/assets/Icon/Main-section-Icons/Bell"
import Plus from '@/assets/Icon/Main-section-Icons/Plus';
import Image from 'next/image';
import profilePic from "@/assets/Images/profile.png";
import SubMenu from './SubMenu';

const Header = () => {
  return (
    <header id='header' className="h-[70px] bg-[#161B22] mb-[50px]">
      <div className="container">
        <nav className="py-[16px] flex items-center justify-between">
          <ul className="flex items-center gap-x-[16px]">
            <li>
              <Link href="/">
                <Logo />
              </Link>
            </li>
            <li>
              <input
                className=" w-[272px] py-[2px] pl-[12px] text-[13px] font-semibold leading-[-0.26px] bg-transparent border-2 border-[#282C31] rounded-md"
                type="text"
                placeholder="Search or jump to..."
              />
            </li>
            <li className="text-white text-[14px] font-bold leading-[-0.14px]">
              <Link href="/pull_requests">Pull requests</Link>
            </li>
            <li className="text-white text-[14px] font-bold leading-[-0.14px]">
              <Link href="/issues">Issues</Link>
            </li>
            <li className="text-white text-[14px] font-bold leading-[-0.14px]">
              <Link href="/codespaces">Codespaces</Link>
            </li>
            <li className="text-white text-[14px] font-bold leading-[-0.14px]">
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li className="text-white text-[14px] font-bold leading-[-0.14px]">
              <Link href="/explore">Explore</Link>
            </li>
          </ul>
          <ul className='flex items-center gap-[12px]'>
            <li>
              <Bell />
            </li>
            <li>
              <Plus />
            </li>
            <li>
              <Image
                src={profilePic}
                width={35}
                height={35}
                alt="Picture of the author"
              />
            </li>
          </ul>
        </nav>
        <SubMenu/>
      </div>
    </header>
  );
};

export default Header;<h1>Header</h1>