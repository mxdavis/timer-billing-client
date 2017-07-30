import React from 'react'

const Project = ({ project: { id, name, bill_rate}}) => 
  <tr key={id}>
    <td className="uk-text-truncate">{name}</td>
    <td className="uk-text-truncate">${bill_rate}</td>
  </tr>
export default Project