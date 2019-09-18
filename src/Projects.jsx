import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDesignerLife } from 'react-undraw-illustrations'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawDesignerLife />
          </div>
          <div className="column">
            <h1 className="ui header">My Projects</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod ab doloremque eaque. Consequatur temporibus, quos enim, eaque nemo ad iusto sequi modi totam qui veniam? Ab asperiores inventore distinctio.</p>
          </div>
        </div>
        <div className="ui stackable four column grid">
          {projectsList}
        </div>
      </div>
    )
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }
}

export default Projects