// import {useTranslation} from "react-i18next";
// import CardComponent from "../../Components/Card.component";
import ContentComponent from "../../Components/Content.component";
import PaginationTable from "./PaginationTable";


import './table.css'
function TableExample() {   
    return (
        <div>
            <ContentComponent>
                <PaginationTable></PaginationTable>
            </ContentComponent>
        </div>
    )
}
export default TableExample