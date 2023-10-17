import Logo from '@/assets/Icon/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-[6px]'>
            <Logo />
            <p className='text-white'>© 2022 GitHub, Inc.</p>
          </div>
          <div className='flex items-center gap-[42px]'>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Terms</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Privacy</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Security</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Status</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Docs</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Contact GitHub</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Pricing</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">API</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Training</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">Blog</Link>
            <Link className='text-white text-[#58A6FF] text-[12px] font-semibold leading-[-0.24px]' href="#">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;<h1>Footer</h1>