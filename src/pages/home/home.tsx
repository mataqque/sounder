import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../store/slice/projectsSlice';
import { type IProject } from '../../store/store.interface';
import { AsideBar } from '@/components/global/asidebar/asidebar';

export const Home = (): React.ReactNode => {
	const data = useSelector(selectProjects);
	return <div className=''></div>;
};
