
import React from 'react';
import { Navbar as NextUINavbar, NavbarBrand } from '@nextui-org/react';

const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'relative', marginTop: '5px', marginBottom: '10px' }}>
      <NextUINavbar
        isBordered
        style={{
          width: '80%',
          padding: '5px',
          maxWidth: '800px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.2)',
          zIndex: 1,
          height: '50px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <NavbarBrand
          style={{
            fontFamily: 'cursive',
            fontWeight: 'bolder',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <p>&copy; 2024 Task Master</p>
        </NavbarBrand>
      </NextUINavbar>
    </div>
  );
};

export default Footer;
