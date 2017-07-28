import React from 'react'


const Task = ({ task: { client, project, bill_rate, bill_time, description, total, billed, date, task_id }}) => 
      <tr key={task_id}>
          <td><input class="uk-checkbox" type="checkbox" /></td>
          <td class="uk-text-truncate">{client}</td>
          <td class="uk-text-truncate">{project}</td>
          <td class="uk-text-truncate">{description}</td>
          <td class="uk-text-truncate">{bill_rate}</td>
          <td class="uk-text-truncate">{bill_time}</td>
          <td class="uk-text-truncate">{total}</td>
          <td class="uk-text-truncate">{billed}</td>
          <td class="uk-text-truncate">{date}</td>
      </tr>

export default Task