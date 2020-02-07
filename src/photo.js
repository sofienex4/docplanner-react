import React from 'react';
import logo from './logo.svg';
import './photo.css';
import NavBar from './navBar'

function photo() {
  const navItems = [
    { title: "About us" },
    { title: "Career" },
    {
      title: "Departments",
      sousMenu: ["Marketing & PR", "Customer Success & Sales"]
    }
  ];
  return (
    <div className="photo">
      <NavBar navItems={navItems}/>
      
    </div>
  );
}

export default App;
