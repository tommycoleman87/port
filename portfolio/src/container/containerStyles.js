import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    margin-top: 25px;
    height: 500px;
    width: 500px;
    justify-content: center;
    align-items: center;

 

    &:before {
        position: absolute;
        width: 75px; 
        height: 75px;
        border-color: green; 
        border-style: solid; 
        content: '     ';
        top:0;
        left:0;
        border-width: 10px 0 0 10px;
    }
  
    &:after {
        position: absolute;
        width: 75px; 
        height: 75px;
        border-color: purple; 
        border-style: solid; 
        content: '     ';
        top: 0;
        right: 0;
        border-width: 10px 10px 0 0;
    }

    >:first-child:before {
        position: absolute;
        width: 75px; 
        height: 75px;
        border-color: blue; 
        border-style: solid; 
        content: '     ';
        bottom: 0;
        right: 0;
        border-width: 0 10px 10px 0;
    }
   
    >:first-child:after {
        position: absolute;
        width: 75px; 
        height: 75px;
        border-color: red; 
        border-style: solid; 
        content: '     ';
        bottom: 0;
        left: 0;
        border-width: 0 0 10px 10px;
    }
   
`

