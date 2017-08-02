import React, { Component } from 'react'
import Modal from 'react-modal'

import AddTask from './AddTask'

export default class Task extends Component {
    constructor(props){
    super(props)

    this.state = { imodalIsOpen: false}
 
  }

  openModal = () => this.setState({modalIsOpen: true})
  closeModal = () => this.setState({modalIsOpen: false})

  clickMe() {
    this.openModal()
  }

  render() {
    const modalStyle = {
        content: {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        height: '60%',
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '15%', 
        transform: 'translate(-50%, -10px)',
        width: '40%',
        maxWidth: '40rem'
      },
      overlay: {
        "position": "absolute",
        "overflow": "auto",
        "minHeight": "5%",
      }
    }
    return (

      <tr key={this.props.task.task_id} onClick={() => this.clickMe()}>
          {/*ToDO have these check boxes for unbilled to bill tasks*/}
          {/*<td><input className="uk-checkbox" type="checkbox" /></td>*/}
          <td className="uk-text-truncate">{this.props.task.client}</td>
          <td className="uk-text-truncate">{this.props.task.project}</td>
          <td className="uk-text-truncate">{this.props.task.description}</td>
          <td className="uk-text-truncate">${this.props.task.bill_rate}</td>
          <td className="uk-text-truncate">{this.props.task.bill_time}</td>
          <td className="uk-text-truncate">${this.props.task.total.toLocaleString( undefined,{ minimumFractionDigits: 2 })}</td>
          <td className="uk-text-truncate">{this.props.task.date}</td>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          style={modalStyle}>
          <AddTask task={this.props.task}/>
          <button type="button" className="uk-button uk-margin-top uk-margin-right uk-button-secondary uk-position-top-right" onClick={this.closeModal}>X</button>
        </Modal>
      </tr>


    )
  }

}