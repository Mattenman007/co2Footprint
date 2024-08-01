import React from 'react';
import NavigationMenu from './NavigationMenu';

const Header = () => {
  return (
    <header className="header">
      <img src="logo1.png" alt="Logo" />
      <h1>Weltrettung e.V.</h1>
      <NavigationMenu />
    </header>
  );
};

export default Header;
