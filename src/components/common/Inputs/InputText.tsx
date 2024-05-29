import { type IInputPasswordProps, type IInputProps } from './interface';
import { useRef, useState } from 'react';
import { IconTogglePassword } from './iconInputs';
// import iconValid from '../../../assets/multimedia/icons/check.png';
// import iconError from '../../../assets/multimedia/icons/error.png';
import { useField } from 'formik';
import { getInputClasses, getValidClass } from './helpers';
import { setInputTextProps } from '../form/helper';

export const InputText = (props: IInputProps) => {
	const { name, placeholder, defaultValue, type, ...rest } = props;
	const [field, meta] = useField({ name });
	return (
		<div className={`relative ${rest?.className ? rest.className : ''}`}>
			<div className={`content-sub-input ${props.icon ? 'include-icon' : ''}`}>
				<input
					{...field}
					className={`w-full border border-solid border-fifth h-12 ${type === 'lg' ? 'h-[4rem] text-1/3' : ''}  px-4 rounded-lg text-gray-400 placeholder:text-gray-300 bg-white ${getValidClass(meta)}`}
					type='text'
					autoComplete='off'
					placeholder={placeholder || ''}
					tabIndex={props.tabIndex ?? 0}
				/>
				{props.icon && (
					<div className='w-[35px] absolute top-0 bottom-0 my-auto left-[1px] flex items-center justify-center'>
						<div style={{ WebkitMaskImage: `url(${props.icon.src})` }} className='mask-center w-5 h-5 bg-gray-300 '></div>
					</div>
				)}
				{/* <img className='icon-success w-6 h-6 absolute top-0 bottom-0 my-auto right-2 hidden' src={iconValid} alt=''></img>
				<img className='icon-error w-6 h-6 absolute top-0 bottom-0 my-auto right-2 hidden' src={iconError} alt=''></img> */}
			</div>
		</div>
	);
};

export const InputTextPassword = (props: IInputPasswordProps) => {
	const { name, placeholder, form, ...rest } = props;
	const inputPassword = useRef<HTMLInputElement>(null);
	const [iconShowPassword, SetIconShowPassword] = useState<boolean>(true);
	const showPassword = () => {
		inputPassword.current?.getAttribute('type') === 'password' ? SetIconShowPassword(false) : SetIconShowPassword(true);
	};
	return (
		<div className={`relative ${rest?.className ? rest.className : ''}`}>
			<div className={`content-sub-input ${props.icon ? 'include-icon' : ''}`}>
				<input
					className={`w-full border border-solid border-gray-200 h-12 px-4 rounded-lg text-gray-400 placeholder:text-gray-300 ${getInputClasses(name, form)}`}
					type={iconShowPassword ? 'password' : 'text'}
					placeholder={placeholder || ''}
					{...setInputTextProps(name, form)}
					ref={inputPassword}
				/>
				<IconTogglePassword class={iconShowPassword} showPassword={showPassword}></IconTogglePassword>
				{/* <img className='icon-success w-6 h-6 absolute top-0 bottom-0 my-auto right-2 hidden' src={iconValid} alt=''></img>
				<img className='icon-error w-6 h-6 absolute top-0 bottom-0 my-auto right-2 hidden' src={iconError} alt=''></img> */}
			</div>
		</div>
	);
};
