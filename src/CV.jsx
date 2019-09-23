import React, {Component} from "react"
import axios from "axios"
import { UndrawDesignerLife } from 'react-undraw-illustrations'

class CV extends Component {
  constructor () {
    super ();
    this.state = {
      education: [],
      jobs: []
    };
  }

  render () {
    const education = this.state.education
    const jobs = this.state.jobs

    let educationList
    let jobsList

    if (education.length > 0) {
      educationList = education.map( edu => {
        return (
          <div key={edu.id}>
            <ul>
              <li>
                <h3 className="ui header">
                  {edu.name}
                </h3>
                <p>
                  {edu.description}
                </p>
              </li>
            </ul>
          </div>
        )
      })
    }

    if (jobs.length > 0) {
      jobsList = jobs.map( job => {
        return (
          <div key={job.id}>
            <ul>
              <li>
                <h3 className="ui header">
                  {job.name}
                </h3>
                <p>
                  {job.description}
                </p>
              </li>
            </ul>
          </div>
        )
      })
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column" id="pic">
            <img src="education.jpg" alt="Book and pen"></img>
          </div>
          <div className="column">
            <h1 className="ui header">My Education</h1>
            {educationList}
          </div>
        </div>

        <div className="ui stackable two column grid">
          <div className="column">
            <h1 className="ui header">My Job Experience</h1>
            {jobsList}
          </div>
          <div className="column">
            <UndrawDesignerLife />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.getEducation()
    this.getJobs()
  }

  getEducation() {
    axios.get('./src/data/education.json')
    .then(response => {
      this.setState({
        education: response.data
      })
    })
  }

  getJobs() {
    axios.get('./src/data/jobs.json')
    .then(response => {
      this.setState({
        jobs: response.data
      })
    })
  }
}


export default CV