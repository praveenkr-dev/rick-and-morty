import { useQuery } from '@tanstack/react-query'
import { getCharacterById } from '../api/characters.api'
import { useNavigate } from '@tanstack/react-router';
import Loader from '../../components/loader';
import SomethingWentWrong from '../../components/something-went-wrong/something-went-wrong';

export default function CharacterDetails(props: { characterId: string }) {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['Character', props.characterId],
        queryFn: () => getCharacterById(Number(props.characterId))
    });
    const navigate = useNavigate();

    if (isPending) {
        return <Loader />
    }

    if (error) {
        return <SomethingWentWrong error={error} refetch={refetch} />
    }

    function goBack() {
        const pageNumber = Number(localStorage.getItem('page'))
        navigate({ to: '/characters', search: { page: pageNumber } });
    }

    return (
        <div className='flex gap-4 flex-col justify-center items-center h-full'>
            {
                data &&
                <div className='flex flex-col gap-4 bg-[#EDEDEE] p-4 rounded-md'>
                    <div><img src={data.image} alt="character image" /></div>
                    <div className='flex'>
                        <div className='w-[45%]'>Name :</div>
                        <div className='font-bold'> {data.name}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>Location : </div>
                        <div className='font-bold'>{data.location.name}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>Gender : </div>
                        <div className='font-bold'>{data.gender}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>Spices : </div>
                        <div className='font-bold'>{data.species}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>Alive Status : </div>
                        <div className='font-bold'>{data.status}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>Origin : </div>
                        <div className='font-bold'>{data.origin.name}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>No.of episodes : </div>
                        <div className='font-bold'>{data.episode.length}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-[45%]'>Type : </div>
                        <div className='font-bold'>{data.type.length > 0 ? data.type : '-'}</div>
                    </div>
                </div>
            }
            <button className='bg-[#3A4767] text-white cursor-pointer p-2 px-4 rounded-md font-extrabold text-lg' onClick={goBack}>
                &#8592;</button>
        </div>
    )
}
