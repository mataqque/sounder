import { AsideBar } from '@/components/global/asidebar/asidebar';
import { Footer } from '@/components/global/footer/footer';
import Navbar from '@/components/global/navbar/navbar';
import { Outlet } from 'react-router';

export const PublicRoute = (): JSX.Element => {
	return (
		<main className='text-1/5 bg-primary min-h-screen relative flex'>
			<div className='w-[40vw] h-[35vw] absolute bg-[#ffffff07] rounded-full top-0 left-0 translate-x-[-20%] translate-y-[-20%]'></div>
			<AsideBar />
			<div className='w-full h-screen backdrop-blur-[40px] border border-solid border-[#ffffff15]'>
				<Outlet></Outlet>
			</div>
		</main>
	);
};
