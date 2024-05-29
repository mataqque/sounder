import { Field, useField } from 'formik';

export const InputToggle = ({ name }: { name: string }) => {
	const [field, meta, helpers] = useField({ name });
	return (
		<label className='relative inline-flex items-center cursor-pointer'>
			<Field type='checkbox' className='sr-only peer' name={name} />
			<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-success"></div>
		</label>
	);
};
