// import {useTranslation} from "react-i18next";
// import CardComponent from "../../Components/Card.component";
import { useMemo } from "react";
import { useTable } from "react-table";
import ContentComponent from "../../Components/Content.component";
import {COLUMNS} from './Columns';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css'
function Department() {
    const columns = useMemo(() => COLUMNS,[])    
    const data = useMemo(() => MOCK_DATA,[])    
    const tableInstance = useTable({
        columns,
        data
    });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;
    return (
        <div>
            <ContentComponent>
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
            </ContentComponent>
        </div>
    )
}
export default Department