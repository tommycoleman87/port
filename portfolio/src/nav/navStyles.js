import styled from 'styled-components'
export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
    animation: ${props => props.sticky ? 'moveDown 0.5s ease-in-out' : 'none'}
    @keyframes moveDown {
        from {
          transform: translateY(-5rem);
        }
        to {
          transform: translateY(0rem);
        }
      }
      
      @keyframes rotate {
        0% {
          transform: rotateY(360deg);
        }
        100% {
          transform: rotateY(0rem);
        }
`
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