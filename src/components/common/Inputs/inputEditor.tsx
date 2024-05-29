import { type IInputEditor } from './interface';
import { useField } from 'formik';
import { useEffect, useState } from 'react';

export const InputEditor = ({ name, form, data = '' }: IInputEditor) => {
	const [field, meta, helpers] = useField({ name });
	function handleEditorChange(value: any): void {
		console.log('data', value);
		helpers
			.setValue(value)
			.then(() => {
				console.log('value set');
			})
			.catch(() => {
				console.log('value not set');
			});
	}
	return (
		<textarea
			className='scroll'
			{...field}
			value={field.value}
			onChange={e => {
				handleEditorChange(e.target.value);
			}}
			style={{ width: '100%', height: '100%', padding: '10px', borderRadius: '10px', resize: 'none' }}
		/>
	);
};
