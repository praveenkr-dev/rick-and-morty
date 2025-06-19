import type { ButtonProps } from './button.props';

export default function Button(props: ButtonProps) {
    return (
        <button className='bg-[#3A4767] text-white cursor-pointer p-2 px-4 rounded-md disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed' onClick={props.onClickFn} disabled={props.disabled}>
            {props.children}
        </button>
    )
}