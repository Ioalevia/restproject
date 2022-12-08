import React from "react";
import {useParams} from "react-router-dom";

const ProjectItem = ({ project, delete_project }) => {
    return (
        <tr>
            <td>{project.id}</td>
            <td>{project.title}</td>
            <td>{project.link}</td>
            <td>{project.users}</td>
            <td><button onClick={()=>delete_project(project.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const ProjectDetail = ({ projects, delete_project }) => {
    //console.log('projects=', projects)
    let { projectId } = useParams()
    //console.log('useParams=', projectId, typeof(projectId))
    let project_filter = projects.filter((project) => project.title.includes(projectId))
    //console.log('project_filter=', project_filter)
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>LINK</th>
                <th>USERS</th>
            </tr>
            {project_filter.map((project) => <ProjectItem project={project} delete_project={delete_project}/> )}
        </table>
    )
}

export default ProjectDetail