import styled from 'styled-components'

export const UL = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 50%;
padding: 0;
li {
    list-style-type: none;
    a {
        text-decoration: none;
        color: black;
        font-weight: bolder;

        &:hover {
            color: purple;
        }
    }
}
`