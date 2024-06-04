import React, { useState, useEffect } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(taskObj.completed || false);

  useEffect(() => {
    setChecked(taskObj.completed || false);
  }, [taskObj]);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
    const updatedTask = { ...taskObj, completed: !checked };
    updateListArray(updatedTask, index);
  };

  const completedStyle = {
    textDecoration: checked ? 'line-through' : 'none',
    color: checked ? 'gray' : 'black'
  };

  return (
    <div className="card-wrapper">
      <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
      <div className="task-holder">
        <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor, ...completedStyle }}>{taskObj.Name}</span>
        <p className="mt-3" style={completedStyle}>{taskObj.Description}</p>
        <div style={{ position: "absolute", top: "160px", left: "160px" }}>
          <button style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>Edit</button>
          <button style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}>Delete</button>
        </div>
        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} style={{ marginTop: '10px' }} />
      </div>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </div>
  );
};

export default Card;
