import React, {useState} from 'react'
import {SkillsContainer, Skill} from './skillsStyles'
import Python from './skillsIcons/python.png'
import react from './skillsIcons/react.png'
import Node from './skillsIcons/node.png'
import HTML from './skillsIcons/html.png'
import ReactNative from './skillsIcons/react-native.png'
import CSS from './skillsIcons/css.png'
import LESS from './skillsIcons/less.png'
import SASS from './skillsIcons/sass.png'

const Skills = () => {
    const [skills, setSkills] = useState([Python, react, Node, HTML, ReactNative, CSS, LESS, SASS])
    return (
        <SkillsContainer>
            <h1>SKILLS</h1>
            {skills.map(skill => {
                return <Skill src={skill} alt='icon' />
            })}
        </SkillsContainer>
    )
}

export default Skills