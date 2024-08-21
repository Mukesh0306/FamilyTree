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
                        <summary>Munjunath (Department Manager)</summary>
                        <ul>
                          <li>Priya (Wife)</li>
                        </ul>
                      </details>
                    </li>
                    <li>Mukesh (Department Manager)</li>
                    <li>
                      <details>
                        <summary>Praveen (Department Manager)</summary>
                        <ul>
                          <li>Sunitha (Wife)</li>
                          <li>Janu (Daughter)</li>
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
