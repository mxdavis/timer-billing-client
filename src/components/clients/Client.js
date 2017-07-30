import React from 'react'

import Project from '../projects/Project'

const Client = ({ client: { id, name, email, projects}}) => 
  <div key={id} className="uk-width-5-10 uk-container-center">
    <h2 className="uk-heading-line uk-text-center"><span>{name} <h3>{email}</h3></span></h2>
      <div className="uk-overflow-auto">
        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider uk-table-striped uk-table-responsive">
          <thead>
            <tr>
              <th className="uk-table-expand">Project Name</th>
              <th className="uk-table-expand">Bill Rate</th>
            </tr>
          </thead>
        <tbody>
          {projects.map(p => <Project project={p} />)}
        </tbody>
      </table>
    </div>
  </div>

export default Client
