import React from 'react';
import StudentInfo from './components/StudentInfo';
import Expe from './components/Expe';
import { Card } from './components/Card';

function App() {
  const student = {
    name: 'Vishal',
    class: 13,
    address: 'Irunpur'
  };

  return (
    <div className="App">
      <StudentInfo student={student} />

      <Expe />

      <Card newName = "devui" />
    </div>

    
  );
}

export default App;
