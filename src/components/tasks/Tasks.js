import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tasks, fetchTasks } from '../../redux/actions/tasks/tasks'
import {startFetchingData, stopFetchingData} from '../../redux/actions/fetchingData'
import Task from './Task'

require('isomorphic-fetch');

class Tasks extends Component {
  
  showTasks = (taskType) => {
    return this.props[`${taskType}Tasks`] !== [] ? 
           <div class="uk-overflow-auto">
             <table class="uk-table uk-table-hover uk-table-middle uk-table-divider uk-table-striped">
               <thead>
                 <tr>
                  <th class="uk-table-shrink"></th>
                  <th class="uk-table-shrink">Client</th>
                  <th class="uk-table-shrink">Project</th>
                  <th class="uk-table-expand">Description</th>
                  <th class="uk-width-shrink">Bill Rate</th>
                  <th class="uk-table-shrink">Bill Time</th>
                  <th class="uk-table-shrink">Total Amount</th>
                  <th class="uk-table-shrink">Date</th>
                </tr>
              </thead>
            <tbody>
              {this.props[`${taskType}Tasks`].map(task => <Task task={task}/>)}
            </tbody>
          </table>
        </div>
            
            
            :
           <div className="uk-spinner"> Please wait while I load the tasks </div>
  }

  componentDidMount() {
    this.props.fetchTasks('unbilled')
    this.props.fetchTasks('billed')
  }

 
  render() {
    return (
      <div>
        <h1 className="uk-heading-primary">Welcome User</h1>
        <h1 className="uk-heading-line uk-text-center"><span>Here are your tasks waiting to be billed:</span></h1>
        {this.showTasks("unbilled")}
        <h1 className="uk-heading-line uk-text-center"><span>Here are your tasks that were already billed:</span></h1>
        {this.showTasks("billed")}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    billedTasks: state.tasks.billed_tasks,
    unbilledTasks: state.tasks.unbilled_tasks,
    fetchingData: state.fetchingData

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { tasks, startFetchingData, stopFetchingData, fetchTasks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);