import { useState } from 'react';
import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { changeActive } from '@/helpers/helpers';
import brand from '@/assets/multimedia/icons/icon-brand.svg';

export default function Navbar(): JSX.Element {
	const [open, setOpen] = useState<string>('');

	const openNavbar = (): void => {
		const newValue: string = changeActive(open, 'open', 'close');
		setOpen(newValue);
	};

	return (
		<div className={'flex h-[6rem] fixed top-0 z-10 w-full'}>
			<div className='container flex justify-between'></div>
		</div>
	);
}

interface IPropsNavbarLinkItem {
	to: string;
	children: JSX.Element | JSX.Element[];
	className: string;
}

export function NavbarLink(props: IPropsNavbarLinkItem): JSX.Element {
	const { to } = props;
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'link active ' : '')}>
			{props.children}
		</NavLink>
	);
}
