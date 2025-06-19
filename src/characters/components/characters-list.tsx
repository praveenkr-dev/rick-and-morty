import { useSuspenseQuery } from '@tanstack/react-query'
import { getAllCharacters } from '../api/characters.api'
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import type { Character } from '../models/character.model';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useState } from 'react';
import Loader from '../../components/loader';
import SomethingWentWrong from '../../components/something-went-wrong/something-went-wrong';
import TableComponent from '../../components/table/table-component';
import Button from '../../components/button/button';

const columnHelper = createColumnHelper<Character>();

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
        header: 'Id'
    }),
    columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
        header: 'Name'
    }),
    columnHelper.accessor('location.name', {
        cell: (info) => info.getValue(),
        header: 'Location'
    }),
    columnHelper.accessor('gender', {
        cell: (info) => info.getValue(),
        header: 'Gender'
    })
]

export default function CharactersList() {
    const navigate = useNavigate();
    const search = useSearch({ from: '/characters/' });
    const [pageNumber, setPageNumber] = useState<number>(search.page);
    const { data, isPending, error, refetch } = useSuspenseQuery({
        queryKey: ['Characters', pageNumber],
        queryFn: () => getAllCharacters(pageNumber)
    });

    const table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel()
    });

    function goToDetails(id: number) {
        localStorage.setItem('page', `${pageNumber}`)
        navigate({ to: `/characters/${id}` });
    }

    if (isPending) {
        return <Loader />
    }

    if (error) {
        return <SomethingWentWrong error={error} refetch={refetch} />
    }

    function goNextPage() {
        setPageNumber(prev => prev + 1);
        navigate({
            to: '.',
            search: {
                ...search,
                page: pageNumber + 1,
            },
            replace: true,
        });
    }

    function goPreviousPage() {
        setPageNumber(prev => prev - 1);
        navigate({
            to: '.',
            search: {
                ...search,
                page: pageNumber - 1,
            },
            replace: true,
        });
    }

    return (
        <div className='flex flex-col items-center gap-4 p-4'>
            <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
             <div className='font-bold'>Rick and morty characters list</div>
            <Button onClickFn={refetch}>
                <div>&#10227;</div>
            </Button>
            </div>
            <TableComponent onClickFn={goToDetails} table={table} />
            <div className='flex justify-between w-full'>
                <Button onClickFn={goPreviousPage} disabled={pageNumber < 2}>
                    <div>Previous</div>
                </Button>
                <Button onClickFn={goNextPage}>
                    <div>Next</div>
                </Button>
            </div>
            </div>
        </div>
    )
}
