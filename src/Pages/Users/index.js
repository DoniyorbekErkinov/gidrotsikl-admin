import {useTranslation} from "react-i18next";

function Users(params) {
    const {t} = useTranslation()
    return (
        <div>
            <h1 className="text-3xl text-red-600 ">
                {t('message')}
            </h1>
        </div>
    )
}
export default Users