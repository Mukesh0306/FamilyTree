import React from 'react';
import './TreeBranches.css';  // Assuming you will handle the custom styling

const TreeBranches = () => {
  return (
    <div className="tree-container">
      <ul className="tree">
        <li>
          <details open>
            <summary>Ramanna (Father)</summary>
            <ul>
              <li>
                <details>
                  <summary>Lakshmi (Mother)</summary>
                  
                  <ul>
                    <li>
                      <details>
                        <summary>Munjunath (Project Manager)</summary>
                        <ul>
                          <li>Priya (Wife)</li>
                          <img 
            src={`${process.env.PUBLIC_URL}/TreeDesign.jpg`} 
            alt="Tree Design" 
            style={{ width: '60px', height: '60px', marginRight: '10px' }} 
          />
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Mukesh (Software Engineer)</summary>
                        <ul>
                          <li>Bhagi (Partner)</li>
                          <img 
            src={`${process.env.PUBLIC_URL}/TreeDesign.jpg`} 
            alt="Tree Design" 
            style={{ width: '60px', height: '60px', marginRight: '10px' }} 
          />
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Praveen (DevOps Lead)</summary>
                        <ul>
                          <li>Sunitha (Wife)</li>
                          <li>Janu (Daughter)</li>
                          <img 
            src={`${process.env.PUBLIC_URL}/janu.jpg`} 
            alt="Tree Design" 
            style={{ width: '100px', height: '100px', marginRight: '10px' }} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/janu.jpg`} 
            alt="Tree Design" 
            style={{ width: '100px', height: '100px', marginRight: '10px' }} 
          />
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default TreeBranches;
