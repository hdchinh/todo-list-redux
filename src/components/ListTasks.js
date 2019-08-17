import React from 'react';
import TaskDetail from './TaskDetail';
import { connect } from 'react-redux';

class ListTasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var div_style = {
      marginTop: "20px"
    }

    var taskslist = this.props.list.map((task, index) => {
      return(
        <div key={index} style={div_style}>
          <TaskDetail 
            task={task}
            index={index}
            delete_task={this.props.delete_task}
          />
        </div>
      )
    });

    return(
      <div>
        {taskslist}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.task.list
  }
}

export default connect(mapStateToProps, null)(ListTasks);
