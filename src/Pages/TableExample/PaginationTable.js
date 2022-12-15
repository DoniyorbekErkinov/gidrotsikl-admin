// import {useTranslation} from "react-i18next";
// import CardComponent from "../../Components/Card.component";
import { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import ReactPaginate from 'react-paginate';
import styled from "styled-components";
import { COLUMNS} from './Columns';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css'
function PaginationTable() {
    const [itemOffset, setItemOffset] = useState(0);
    const columns = useMemo(() => COLUMNS, [])    
    const data = useMemo(() => MOCK_DATA,[])    
    const tableInstance = useTable({
        columns,
        data,
        initialState: { pageSize: 20 } 
    }, usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage, previousPage,
        canNextPage, canPreviousPage,
        pageOptions, state,
        gotoPage,
        setPageSize
    } = tableInstance;
    const { pageIndex, pageSize } = state

    const endOffset = itemOffset + pageSize;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / pageSize);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * pageSize) % data.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
    return (
        <div>
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
                        page.map((row) => {
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
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>   
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<<"
                className="inline-flex -space-x-px mt-5"                
                breakLinkClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                activeClassName="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                pageClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                previousClassName="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                nextClassName="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            />       
            {/* <div>
                <BUTTON onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</BUTTON>
                <BUTTON onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</BUTTON>
            </div>
            <div>
                <BUTTON onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</BUTTON>
                <BUTTON onClick={() => nextPage()} disabled={!canNextPage}>Next</BUTTON>
            </div> */}
        </div>
    )
}
const BUTTON = styled.button`
    width: 100px;
    height: 40px;
    background: transparent;
    margin: 10px 25px;
    color: #0c5ced;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid #0c5ced;
    border-radius: 25px;
`;

export default PaginationTable