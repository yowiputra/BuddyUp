import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.jsx';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Buddy Up</Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <Dropdown className="navbar-brand" />
          </ul>
        </div>
      </div>
    </nav>
  );
}