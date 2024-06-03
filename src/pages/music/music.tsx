import { type ICategory } from '@/helpers/interface';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export const Music = (): React.ReactNode => {
	const array: number[] = [];
	return (
		<section className='text-1/5 p-4 w-full h-full overflow-hidden flex flex-col'>
			<h2 className='text-white text-1/3 mb-2'>Galeria de música</h2>
			<div className='w-full h-[1px] bg-[#ffffff15] my-2'></div>
			<div className='flex flex-col mb-2'>
				<ContentSubCategories />
			</div>
			{array.length > 0 && (
				<div className='ctx-card grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4'>
					{array.map((i, index) => (
						<CardMusic key={index + ''}></CardMusic>
					))}
				</div>
			)}
			{array.length <= 0 && (
				<div className=' m-auto w-full h-full flex items-center justify-center'>
					<span className='text-white text-1/0 text-center'>No hay canciones</span>
				</div>
			)}
		</section>
	);
};

const CardMusic = () => {
	return (
		<div className='w-full hover:scale-110 transition-[scale] duration-500 flex flex-col gap-2'>
			<div className='h-20 bg-secondary rounded-lg border border-solid border-[#ffffff15] cursor-pointer '></div>
			<div className='text-0/8 text-white leading-tight px-1'>{'GT ft.Robert - can we be friends'}</div>
		</div>
	);
};
const ContentSubCategories = () => {
	// const [getSubCategories, {}] = useSubcategoriesMutation();
	// const [getNotes, {}] = useNotesMutation();
	// const dispatch = useDispatch();

	// const subCategory: ICategory[] = useSelector((state: any) => state.categorySlice.subCategory);
	const subCategory = [
		{
			uuid: '1',
			name: 'Romanticas',
			description: 'Romanticas',
		},
		{
			uuid: '1',
			name: 'Romanticas',
			description: 'Romanticas',
		},
		{
			uuid: '1',
			name: 'Romanticas',
			description: 'Romanticas',
		},
	];
	const handleSubCategory = async (c: any): Promise<any> => {
		// const { data }: any = await getNotes({ uuid: c.uuid });
		// dispatch(updateNotes(data.data));
	};

	return (
		<div className='w-full h-max flex gap-4 py-2'>
			<div className='flex xsm:hidden w-7 h-7 cursor-pointer border border-solid border-[#b8cad9] rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary group duration-300 toggle-inactive-button'>
				<div className='w-[60%]  h-[60%] icon-sidebar mask-center bg-primary group-hover:bg-white group-hover:border-primary duration-300'></div>
			</div>
			{subCategory.map((item: ICategory) => {
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				return <SubCategory handleSubCategory={handleSubCategory} item={item} key={item.uuid} />;
			})}
		</div>
	);
};

const SubCategory = ({ handleSubCategory, item }: { handleSubCategory: (c: any) => void; item: ICategory }) => {
	const dispatch = useDispatch();
	// const [deleteCategory, {}] = useDeleteCategoryMutation();
	// const [getCategories, {}] = useCategoriesMutation();
	const handleDelete = async () => {
		// confirmAction('¿Estas seguro de eliminar esta categoria?', async () => {
		// 	const { data }: any = await deleteCategory({ uuid: item.uuid });
		// 	if (data.status == 200) {
		// 		dispatch(deleteSubCategory(item));
		// 	}
		// });
	};
	const colorRandom = useMemo(() => {
		const randomColor = Array.from({ length: 3 }, () => Math.floor(Math.random() * 128) + 64);
		const hexColor = randomColor.map(component => component.toString(16).padStart(2, '0')).join('');
		return `#${hexColor}`;
	}, []);
	return (
		<div className='relative h-[2rem]'>
			<div
				className={`w-max h-full px-4 rounded-full flex items-center justify-center text-white text-sub-category cursor-pointer`}
				style={{ backgroundColor: colorRandom }}
				onClick={() => {
					handleSubCategory(item);
				}}
			>
				{item.name}
			</div>
			<div
				className='w-5 h-5 bg-danger flex items-center justify-center rounded-full absolute top-0 right-0 transform translate-x-[40%] -translate-y-[40%] cursor-pointer'
				onClick={() => {
					// handleDelete();
				}}
			>
				<div className='w-[60%] h-[60%] bg-white rounded-full mask-center icon-close'></div>
			</div>
		</div>
	);
};
