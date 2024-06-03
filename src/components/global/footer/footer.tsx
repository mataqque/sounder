import logo from '@/assets/multimedia/icons/icon-brand.svg';
import { getNumberAdress } from '@/helpers/helpers';
import { selectProjects } from '@/store/slice/projectsSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import imgBook from '@/assets/multimedia/icons/book.svg?url';

export const Footer = (): JSX.Element => {
	const data = useSelector(selectProjects);
	return <footer className='footer bg-primary'></footer>;
};
