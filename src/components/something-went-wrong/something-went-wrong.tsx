import type { SomethingWentWrongProps } from "./something-went-wrong.props";

export default function SomethingWentWrong({ error, refetch }: SomethingWentWrongProps) {
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='bg-[#EDEDEE] p-4 rounded-md flex flex-col justify-center items-center gap-4 w-[40rem]'>
            <h1 className='text-lg'>Something went wrong</h1>
            <div className='bg-[#ffcdd2] text-[#ef5350] p-4 rounded-md'>{error.message}</div>
            <button onClick={() => refetch()} className='bg-[#3A4767] text-white cursor-pointer p-2 px-4 rounded-md flex gap-2 items-center'>
                <div>&#10227;</div>
                <div>Retry</div></button>
            </div>
        </div>
    )
}