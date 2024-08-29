import styled from "styled-components"

const FooterEstilizado = styled.footer`
    background-color: #04244F;
    color: white;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
`

const Rodape = () => {

    return (
        <FooterEstilizado>
            Desenvolvido por Rafael 
        </FooterEstilizado>
    )
}

export default Rodape