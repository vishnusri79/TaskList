// TaskList.tsx

import React from 'react';

interface Task {
  title: string;
  tasks: string[];
  id: number;
}

interface TaskListProps {
  tasklist: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasklist }) => {
  return (
    <div>
      <h2>Task List</h2>
      <p>Total Number of Tasks: {tasklist.reduce((acc, curr) => acc + curr.tasks.length, 0)}</p>
      {tasklist.map((group) => (
        <div key={group.id}>
          <h3>{group.title}</h3>
          <ul>
            {group.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
