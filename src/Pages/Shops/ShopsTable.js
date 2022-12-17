import { useMemo } from "react";
import '../TableExample/table.css'
import { useTranslation } from "react-i18next";
import {DeleteForever, Edit} from "@mui/icons-material"


function ShopsTable({shops, getSingleFile, deleteData}) {
    const data = useMemo(() => shops, [shops])
   const { t } = useTranslation()
   return (
            <table className="text-center border-emerald-200 rounded-lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{t('table.address')}</th>
                        <th>{t('table.phone')}</th>
                        <th>{t('table.countOdProducts')}</th>
                        <th>{t('table.actions')}</th>
                    </tr>
                </thead>
                <tbody>                            
                {
                    data.map((shop, index) => (
                       <tr  key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {shop.address}
                            </td>
                            <td>
                                {shop.phone}
                            </td>
                            <td>
                                {shop.countOfProducts}
                            </td>                                                        
                            <td>                               
                                <button onClick={() => getSingleFile(shop.id)} 
                                    className="bg-blue-400 mr-2 py-1 px-2 rounded-xl text-white"
                                >
                                    <Edit></Edit>
                                </button>
                                <button onClick={() => deleteData(shop.id)} 
                                    className="bg-red-600 ml-2 py-1 px-2 rounded-xl text-white"
                                >
                                    <DeleteForever ></DeleteForever>
                                </button>
                            </td> 
                       </tr>                             
                    ))
                }
                    </tbody>
            </table>
   )
}
export default ShopsTable