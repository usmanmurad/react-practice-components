import React, { useState } from "react";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.addTask = this.addTask.bind(this)
    }
    render() {
        return (
            <h1>Hello ToDo</h1>
        );
    }
}
//export default ToDo

// class TaskList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const tasks = this.props.tasks
//         const listItems = tasks.map((task) =>
//                 <li>{task}</li>
//         );
//         return (
//             <ul>{listItems}</ul>
//         );
//     }
// }


// class AddTask extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             task : '',
//             tasks : []
//         };
//         this.handleInput = this.handleInput.bind(this)
//         this.addTask = this.addTask.bind(this)
//         this.removeTask = this.removeTask.bind(this)
//     }
//     removeTask(event) {
//         debugger;
//         var taskNumber = event.target.parentNode.id
//         var allTasks = this.state.tasks
//         allTasks.splice(parseInt(taskNumber), 1)
//         this.setState({tasks : allTasks})
//     }
//     handleInput(event) {
//         this.setState({task: event.target.value})
//     }
//     addTask(event) {
//         var allTasks = this.state.tasks.concat(this.state.task)
//         this.setState({tasks: allTasks })
//     }
//     render() {
//         const tasks = this.state.tasks
//         var taskNumber = 0
//         const listItems = tasks.map((task) =>
//                 <li id={taskNumber++}>{task}<span color='red' onClick={this.removeTask}>(-)</span></li>
//         );
//         return (
//             <div>
//                 <label>Add your tasks here</label>
//                 <input type='text' value={this.state.task} onChange={this.handleInput}/>
//                 <button onClick={this.addTask}>Add</button>
//                 <br/>
//                 <ul>{listItems}</ul>
//             </div>
//         );
//     }
// }
// export default AddTask

function AddTask() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    function removeTask(event) {
        var taskNumber = event.target.parentNode.id
        var allTasks = tasks.slice()
        allTasks.splice(parseInt(taskNumber), 1)
        setTasks(allTasks)
    }

    function handleInput(event) {
        setTask(event.target.value)
    }

    function addTask(event) {
        debugger;
        var allTasks = tasks.concat(task)
        setTasks(allTasks)
        setTask('')
    }

    const allTasks = tasks
    var taskNumber = 0
    const listItems = allTasks.map((task) =>
            <li id={taskNumber++}>{task}<span color='red' onClick={removeTask}>(-)</span></li>
    );
    return (
        <div>
            <label>Add your tasks here</label>
            <input type='text' value={task} onChange={handleInput}/>
            <button onClick={addTask}>Add</button>
            <br/>
            <ul>{listItems}</ul>
        </div>
    );

}
export default AddTask
