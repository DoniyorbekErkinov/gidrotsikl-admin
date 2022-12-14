import {useTranslation} from "react-i18next";
import CardComponent from "../../Components/Card.component";
import ContentComponent from "../../Components/Content.component";
function Department(params) {
    
    const {t} = useTranslation()
    return (
        <div>
            <ContentComponent>
                <CardComponent>
                    <div>
                        <h1>123 54 79 98</h1>
                    </div>
                </CardComponent>
            </ContentComponent>
        </div>
    )
}
export default Department