import { flexRender } from "@tanstack/react-table"
import type { BaseProps, TableProps } from "./table-component.props"

export default function TableComponent<T extends BaseProps>(props: TableProps<T>) {
  return (
    <div className='border border-solid border-black rounded-md'>
      <table>
        <thead>
          {
            props.table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {
                  hg.headers.map(header => (
                    <td>
                      <div className='border-b-2 p-2 font-bold'>
                        {
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        }
                      </div>
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {props.table.getRowModel().rows.map(row => (
            <tr className='border-b-[1px] cursor-pointer hover:bg-gray-200' key={row.id} >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} onClick={() => props.onClickFn(cell.row.original.id)}>
                  <div className="p-2">{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}