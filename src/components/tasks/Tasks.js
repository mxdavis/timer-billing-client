import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tasks, fetchTasks } from '../../redux/actions/tasks/tasks'
import {startFetchingData, stopFetchingData} from '../../redux/actions/fetchingData'
import Task from './Task'

require('isomorphic-fetch');

class Tasks extends Component {
  
  showTasks = (taskType) => {
    debugger
    if (this.props.tasks[taskType]){
      return <div> I have loaded</div>
    }
   
      
    // return state ? <div>I have state</div> : <div> state is undefined</div>
    // this.state[tasks].map(task => <Task props={task} />) 
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
        {(this.props.fetchingData.length > 0 && this.props.fetchingData.indexOf("billed") > -1) ? <div className="uk-spinner">I am loading</div> : this.showTasks("unbilled")}
        <h1 className="uk-heading-line uk-text-center"><span>Here are your tasks that were already billed:</span></h1>
        {(this.props.fetchingData.length > 0 && this.props.fetchingData.indexOf("billed") > -1) ? <div className="uk-spinner">I am loading</div> : this.showTasks("billed")}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    tasks: state.tasks,
    fetchingData: state.fetchingData

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { tasks, startFetchingData, stopFetchingData, fetchTasks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);