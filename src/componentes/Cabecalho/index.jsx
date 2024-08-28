import {styled} from "styled-components"

const HeaderEstilizado = styled.header`
    position: fixed; 
    padding: 60px 10px;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {

    return (
    <HeaderEstilizado>
        <img src="/imagens/logo.png" alt=""/>

    </HeaderEstilizado>)
}

export default Cabecalho