import styled from 'styled-components'

export const SkillsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 400px;
    justify-content: space-around;
`

export const Skill = styled.img`
    width: 100px;
    height: 100px;
    color: white;
    margin: 10px 10px 10px 10px;
    &:hover {
        animation: shake 0.5s;
        animation-iteration-count: 1;
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
`