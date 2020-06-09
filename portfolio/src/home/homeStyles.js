import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    margin: auto;
    margin-top: 25px;
    justify-content: center;
`

export const SquareContainer = styled.div`
    position: absolute;
    top: 9px;
    left: 9px;
    border: 1px solid #cc5500;
    width: 500px;
    height: 500px;
    color: white;
`

export const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -1px;
    left: -1px;
    width: 502px;
    height: 502px;
    border-radius: 25%;
    background-color: black;

`