import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.delete_task(this.props.index)
  }

  delTask = () => {
    this.props.delTask(this.props.index);
  }

  render() {
    var input_style = {
      marginLeft: "10px",
      backgroundColor: "red",
      color: "white",
      borderRadius: "3px"
    }

    return(
      <div key={this.props.index}>
        <span>{this.props.task}</span>
        <input type="submit" value="Delete" style={input_style} onClick={this.delTask} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
} 

const mapDispatchToProps = (dispatch, props) => {
  return {
    delTask: (id) => {
      dispatch(actions.delTask(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
