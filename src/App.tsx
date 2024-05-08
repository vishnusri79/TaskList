// App.tsx

import React from 'react';

import TaskList from './component/TaskList';

import Header from './component/header';

import tasklist from './data';



function App() {
  return (
    <>
      <Header title="Task List" tasks={9} id={1} />
      <TaskList tasklist={tasklist} />
    </>
  );
}

export default App;
