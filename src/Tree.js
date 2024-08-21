import React from 'react';

const TreeCanvas = () => {
  return (
    <div>
      <img 
        src={`${process.env.PUBLIC_URL}/24265.jpg`} 
        alt="Tree Design" 
        style={{ width: '500px', height: '500px' }} 
      />
    </div>
  );
};

export default TreeCanvas;

