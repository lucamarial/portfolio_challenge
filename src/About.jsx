import React from "react"
import { UndrawDesignerLife } from 'react-undraw-illustrations';

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife />
        </div>
        <div class="column">
          <h1 className="ui header">About Me</h1>
          <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        </div>
      </div>
    </div>
  )
}

export default About