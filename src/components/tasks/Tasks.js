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
           <div className="uk-overflow-auto">
             <table className="uk-table uk-table-hover uk-table-middle uk-table-divider uk-table-striped uk-table-responsive">
               <thead>
                 <tr>
                   {/*ToDO have these check boxes for unbilled to bill tasks*/}
                  {/*<th className="uk-table-shrink"></th>*/}
                  <th className="uk-table-expand">Client</th>
                  <th className="uk-table-expand">Project</th>
                  <th className="uk-table-expand">Description</th>
                  <th className="uk-width-small">Bill Rate</th>
                  <th className="uk-width-small">Bill Time</th>
                  <th className="uk-width-small">Total Amount</th>
                  <th className="uk-width-small">Date</th>
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
        <h1 className="uk-heading-line uk-text-center padding-top"><span>Unbilled Tasks:</span></h1>
        {this.showTasks("unbilled")}
        <h1 className="uk-heading-line uk-text-center"><span>Billed Tasks</span></h1>
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