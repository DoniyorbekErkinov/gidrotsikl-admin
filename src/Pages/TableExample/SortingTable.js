// import {useTranslation} from "react-i18next";
// import CardComponent from "../../Components/Card.component";
import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS, GROUPED_COLUMNS} from './Columns';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css'

function SortingTable() {
    const columns = useMemo(() => COLUMNS, [])    
    const data = useMemo(() => MOCK_DATA,[])    
    const tableInstance = useTable({
        columns,
        data
    }, useSortBy);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        footerGroups,
        getSortByToggleProps,
    } = tableInstance;
    return (
        <div>
            <table {...getTableProps}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th 
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                        >
                                            {column.render('Header')} 
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? " up" : " down") : ''}
                                            </span>
                                        </th>
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
                <tfoot>
                    {
                        footerGroups.map((footerGroup) => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map((footer) => (
                                        <td {...footer.getFooterProps()}>{footer.render('Footer')}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }  
                </tfoot>
            </table>
        </div>
    )
}
export default SortingTable