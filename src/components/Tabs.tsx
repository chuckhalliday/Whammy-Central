import React from "react";

const Tabs = () => {
  return (
    <ul className='flex-between nav-tabs'>
      <li className='nav-item'>
        <p className='nav-link mb-0 active'>Profile</p>
      </li>
      <li className='nav-item'>
        <a target='_blank' rel='noopener noreferrer' className='nav-link mb-0'>
          Songs
        </a>
      </li>
      <li className='nav-item'>
        <a target='_blank' rel='noopener noreferrer' className='nav-link mb-0'>
          People
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
