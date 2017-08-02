import React from 'react';

const Home = (props) => {
  return(
      <div className='uk-position-medium uk-position-center uk-text-center'>
          <h1>Welcome to the Billing App</h1>
          <h2>Login with Github</h2>
          {/*render login page or write login, and have an image showing the login page...*/}
          <h3> Open sourced billing app for developers by developers</h3>
            <p>Create clients, projects, and tasks, and bill your clients properly</p>
            <p> This is an open sourced project, so if you would like to contribute please put go to our 
              <a href="https://github.com/mxdavis/timer-billing-client" target="_blank" rel="noopener noreferrer"> Github Page</a></p>
              <p>Created by <a href="https://github.com/mxdavis/" target="_blank" rel="noopener noreferrer">mxdavis</a> as a project at the Flatiron School</p>
      </div>
  )

}

export default Home