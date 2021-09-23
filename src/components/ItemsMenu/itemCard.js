import styled from "styled-components";

const Article = styled.article`
    width: 30%
`

export default function ItemCard({id, onClick, img, itemName, price}) {
    return (
        <Article key={id} onClick={onClick}>
            <img src={img} alt=""></img>
            <p>{itemName}</p>
            <p>{price}</p>
        </Article>
    )
};