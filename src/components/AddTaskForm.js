import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  hanelOnSubmit = () => {
    this.props.onAddTask(this.state.name);
    this.onClear();
  }

  onClear = () => {
    this.setState({
      name: ''
    });
  }
  
  render() {
    const div_style = {
      marginTop: "50px"
    }
    
    const submit_style = {
      backgroundColor: "green",
      borderRadius: "3px",
      color: "white"
    }

    return(
      <div id="form-add-task" style={div_style}>
        <input type="text" name="name" onChange={this.updateName}/>
        <input type="submit" value={this.props.submit_name} onClick={this.hanelOnSubmit} style={submit_style} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    submit_name: state.task.submit_name
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.onAddTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
