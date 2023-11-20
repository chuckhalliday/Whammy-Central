import { React, useState } from 'react';
import Songs from './Songs';
import Artists from './Artists';
import Profile from './Profile';

const Tabs = () => {
  let [active, setActive] = useState(1)
  return (
    <div>
      <ul className="flex-between nav-tabs">
      <li className="nav-item">
        <button className={active === 1 ? "nav-link mb-0 active" : "nav-link mb-0"} onClick={() => setActive(1)}>Profile</button>
      </li>
      <li className="nav-item">
        <button className={active === 2 ? "nav-link mb-0 active" : "nav-link mb-0"} onClick={() => setActive(2)}>Songs</button>
      </li>
      <li className="nav-item">
        <button className={active === 3 ? "nav-link mb-0 active" : "nav-link mb-0"} onClick={() => setActive(3)}>Artists</button>
      </li>
    </ul>
    {active === 1 && <Profile />}
    {active === 2 && <Songs />}
    {active === 3 && <Artists />}
  </div>
  )
}

export default Tabs;
