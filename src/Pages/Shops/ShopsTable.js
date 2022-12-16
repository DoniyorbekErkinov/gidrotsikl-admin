import { useMemo } from "react";
import { useTable } from "react-table";

function ShopsTable({data}) {
    const arrays = useMemo(() => data, [])
    const tableInstance = useTable({
        columns: [
            {
                Header: "Id",
                accessor: "id",
                disableFilters: true
            },
            {
                Header: "Address",
                accessor: "address",
            },
            {
                Header: "Products",
                accessor: "products",
                disableFilters: true
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
            {
                Header: "Created",
                accessor: "createdTa",
                disableFilters: true
                // Cell: ({value}) => {return format(new Date(value), 'dd/mm/yyyy')},
            },
        ],
        data: arrays
    });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;
    return (
        <table {...getTableProps}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((header) => (
                                        <th {...header.getHeaderProps()}>{header.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }                        
                </thead>
                <tbody {...getTableBodyProps}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }                                        
                                </tr>
                            )}
                        )
                        
                    }
                </tbody>                
            </table>
    )
}
export default ShopsTable