import React from 'react';

import Auth from './auth/Auth'

const Home = (props) => {
  return(
    <div className='uk-position-medium uk-position-center uk-text-center'>
      <h1 >Welcome to the Billing App</h1>
      <div className="padding-bottom">
        <h3> Open sourced billing app for developers by developers</h3>
      </div>
      <div className="padding-bottom">
        <Auth />
      </div>
      <div className="padding-top">
        <p className="padding-top">Create clients, projects, and tasks, and bill your clients properly</p>
        <p> This is an open sourced project, so if you would like to contribute please put go to our 
        <a href="https://github.com/mxdavis/timer-billing-client" target="_blank" rel="noopener noreferrer"> Github Page</a></p>
        <p>Created by <a href="https://github.com/mxdavis/" target="_blank" rel="noopener noreferrer">mxdavis</a> as a project at the Flatiron School</p></div>
      </div>
  )

}

export default Home