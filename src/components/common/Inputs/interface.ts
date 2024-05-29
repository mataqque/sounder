export interface IInputPasswordProps {
	name: string;
	placeholder: string;
	defaultValue?: string;
	className?: string;
	form?: any;
	icon?: any;
	tabIndex?: number;
}

export type InputTypeSize = 'sm' | 'md' | 'lg';
export interface IInputProps {
	name: string;
	placeholder: string;
	defaultValue?: string;
	className?: string;
	icon?: any;
	form?: any;
	tabIndex?: number;
	type?: InputTypeSize;
}

export interface IInputEditor {
	name: string;
	form: any;
	data: string;
}
export interface IInputPropsDate {
	title?: string;
	type?: string;
	name: string;
	placeholder?: string;
	defaultValue?: string;
	value?: string;
	className?: string;
	form?: any;
	icon?: any;
	tabIndex?: number;
	disabledDate?: (date: Date) => boolean;
}

export interface ICheckboxDataProps {
	value: string;
	label: string;
	data?: ISelectDataProps[];
}
export interface ISelectDataProps {
	value: string;
	label: string;
}
export interface ISelectProps {
	name: string;
	form: any;
	data: ISelectDataProps[];
	className?: string;
	color?: string;
	tabIndex?: number;
}

export interface IMultiplyCheckBoxProps {
	name: string;
	form: any;
	dataChecks: ICheckboxDataProps[];
	data: ICheckboxDataProps[];
	className?: string;
}
