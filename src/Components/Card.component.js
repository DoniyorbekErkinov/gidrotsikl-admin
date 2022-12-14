import styled from "styled-components"

function CardComponent({children}) {
    return (
        <Card  className="border-5 bg-white rounded-md border-gray-50 shadow-lg m-4 px-3 py-2">
            {children}
        </Card>
    )
}
const Card = styled.div`
    &:hover {
        scale: 1.1;
    }
`;
export default CardComponent