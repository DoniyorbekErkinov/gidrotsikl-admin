import styled from "styled-components"

function ContentComponent({children}) {
    return (
        <Contant  className="border-5 bg-white rounded-md border-gray-50 shadow-lg m-6 px-3 py-2">
            {children}
        </Contant>
    )
}
const Contant = styled.div`
    max-width: 1208px;
`;
export default ContentComponent