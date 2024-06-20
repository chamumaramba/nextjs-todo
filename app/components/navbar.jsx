import React from 'react';
import { Navbar as NextUINavbar, NavbarBrand, Link, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { VscAccount } from 'react-icons/vsc';

const Navbar = ({ session }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'relative', height: '50px' }}>
      <NextUINavbar
        isBordered
        style={{
          width: '80%',
          padding: '10px',
          marginTop: '10px',
          maxWidth: '800px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.2)',
          zIndex: 1,
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
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
          <p>Task Master</p>
        </NavbarBrand>
        <NavbarContent style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          {session ? (
            <div className="flex items-center space-x-2">
              <div className='flex items-center'>
                <VscAccount className="w-4 h-4" />
                <p className="ml-2 hide-on-small">{session.user.email}</p>
              </div>
              <form action="/auth/signout" method="post" className="w-full sm:w-auto">
                <Button
                  type="submit"
                  className="custom-bg-color py-1 px-3 hover:bg-orange-400 rounded-md text-white w-auto shadow-lg flex items-center text-sm"
                >
                  Logout
                </Button>
              </form>
            </div>
          ) : (
            <Link color="foreground" href="#" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto"></Button>
            </Link>
          )}
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};

export default Navbar;
