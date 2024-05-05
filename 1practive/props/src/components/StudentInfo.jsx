import React from 'react';

function StudentInfo({student}) {
  return (
    <div className='bg-red-700'>
    <p className='w-max mt-3 p-3 m-4 bg-white'>{student.name}</p>


      <p> {student.class}</p>
      <p> {student.address}</p>
    </div>
  );
}

export default StudentInfo;
