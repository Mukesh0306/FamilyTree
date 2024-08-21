import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'orgchart'; // Import orgchart plugin
import 'orgchart/dist/css/jquery.orgchart.css'; // Import orgchart CSS
import './TreeBranches.css';
const TreeBranches = () => {
  useEffect(() => {
    const ds = {
      name: 'Ramanna',
      title: 'Father',
      children: [
        {
          name: 'Lakshmi',
          title: 'Mother',
          children: [
            {
              name: 'Munjunath',
              title: 'Department Manager',
              children: [
                { name: 'Priya', title: 'Wife' }
              ]
            },
            {
              name: 'Mukesh',
              title: 'Department Manager'
            },
            {
              name: 'Praveen',
              title: 'Department Manager',
              children: [
                { name: 'Sunitha', title: 'Wife' },
                { name: 'Janu', title: 'Daughter' }
              ]
            }
          ]
        }
      ]
    };

    $('#chart-container').orgchart({
      data: ds,
      nodeContent: 'title',
      direction: 'l2r',
      pan: true,
      // Customizing the display of the chart
      nodeId: 'name',
      toggleSiblingsResp: true
    });
  }, []);

  return (
    <div id="chart-container" style={{ height: '800px', width: '100%' }} />
  );
};

export default TreeBranches;
