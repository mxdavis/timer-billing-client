import React from 'react'


const Task = ({ task: { client, project, bill_rate, bill_time }}) => 
  <div>
    {client}
  </div>

export default Task