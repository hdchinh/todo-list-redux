import React from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import ListTasks from './components/ListTasks';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <AddTaskForm />
        <ListTasks />
      </div>
    )
  }
}

export default App;
