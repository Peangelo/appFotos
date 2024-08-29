import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 56px;
`
const ParagrafoEstilizado = styled.p`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const BotaoEstilizado = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
    border-color: #C98CF1};
`
const DivEstilizado = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = () => {

    return <TagsContainer>
        <ParagrafoEstilizado>Busque por tags:</ParagrafoEstilizado>
        <DivEstilizado>
            {tags.map(tag => <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>)}
        </DivEstilizado>
    </TagsContainer>
}

export default Tags