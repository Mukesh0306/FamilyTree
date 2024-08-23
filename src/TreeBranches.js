import React from 'react';
import './TreeBranches.css';  // Assuming you will handle the custom styling
import { Link } from "react-router-dom";

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
                  <Link to="/parents"><button>Go to Parents Page</button></Link>
                  <ul>
                    <li>
                      <details>
                        <summary>Munjunath (Project Manager)</summary>
                        <ul>
                          <li>Priya (Wife)</li>
                          <Link to="/manjunath"><button>Go to Manjunath Page</button></Link>
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
                          <Link to="/mukesh"><button>Go to Mukesh Page</button></Link>
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
                          <Link to="/praveen"><button>Go to Praveen Page</button></Link>
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
