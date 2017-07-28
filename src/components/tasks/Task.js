import React from 'react'

const Task = ({ task: { client, project, bill_rate, bill_time, description, total, billed, date, task_id }}) => 
      <tr key={task_id}>
          {/*ToDO have these check boxes for unbilled to bill tasks*/}
          {/*<td><input className="uk-checkbox" type="checkbox" /></td>*/}
          <td className="uk-text-truncate">{client}</td>
          <td className="uk-text-truncate">{project}</td>
          <td className="uk-text-truncate">{description}</td>
          <td className="uk-text-truncate">${bill_rate}</td>
          <td className="uk-text-truncate">{bill_time}</td>
          <td className="uk-text-truncate">${total.toLocaleString( undefined,{ minimumFractionDigits: 2 })}</td>
          <td className="uk-text-truncate">{date}</td>
      </tr>

export default Task