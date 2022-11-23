import React from 'react';
import {ITask} from "../Interfaces";


interface Props {
    task: ITask;
    deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, deleteTask}: Props) => {
    return (
        <div className="task">
            <span>TODO</span>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button className="buttonDelete" onClick={() => {deleteTask(task.taskName)}}>X</button>
        </div>
    );
};

export default TodoTask;