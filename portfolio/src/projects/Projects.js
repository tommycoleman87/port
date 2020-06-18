import React, {useState} from 'react'
import {Project, ProjectsContainer} from './projectStyles'
const Projects = () => {
    const [projects, setProjects] = useState(['buddy app', 'conways game of life', 'potluck planner', 'king of the pixel'])
    return (
        <ProjectsContainer>
             <h1>Projects</h1>
            {projects.map(project => {
                return <Project>{project}</Project>
            })}
        </ProjectsContainer>
    )
}

export default Projects