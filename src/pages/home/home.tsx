import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../store/slice/projectsSlice';
import { type IProject } from '../../store/store.interface';
import { CardProject } from '@/components/global/cardProject/cardProject';

export const Home = (): React.ReactNode => {
	const data = useSelector(selectProjects);
	return (
		<div className='text-1/5 '>
			<motion.h2
				key='title-home'
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 0, opacity: 0 }}
				transition={{ duration: 0.5, type: 'spring', delay: 0.2, stiffness: 200 }}
				className='xlg:text-2/2 text-1/9 mobile:text-1/6 text-primary text-center mb-4 mobile:mb-4 leading-tight'
			>
				Elige hoy tu próximo departamento
			</motion.h2>
			<div className='bg-#E9E8E8 w-full'>
				<div className='container'></div>
				<div className='w-full'></div>
			</div>
		</div>
	);
};
