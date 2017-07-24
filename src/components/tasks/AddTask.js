import React, { Component } from 'react';

class AddTask extends Component {
 
  render() {
    return (
      <div>
        HELLO
        <form class="uk-form">
          <fieldset>
              <legend>Add Task</legend>
              <div class="uk-form-row"></div>
              <div class="uk-form-row">HELLLOO!</div>
              {/*<input type="text" placeholder="" disabled> if user didnt select client yet*/}
              <div class="uk-form-row">
                <textarea cols="10" rows="10" placeholder="Description here">Description</textarea>
                <p class="uk-form-help-block">...</p>
              </div>

              <div class="uk-form-icon">
                <i class="uk-icon-calendar"></i>
                <input type="text" />
              </div>
              <label><input type="checkbox" /> ...</label>
          </fieldset>
        </form>
      </div>
    );
  }
};

export default AddTask;
