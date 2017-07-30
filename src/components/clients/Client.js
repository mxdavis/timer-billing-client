import React from 'react'

const Client = ({ client: { id, name, email, projects}}) => 
  <div className="uk-width-5-10 uk-container-center">
    <h2 className="uk-heading-line uk-text-center"><span>{name}</span></h2>
  </div>

export default Client
