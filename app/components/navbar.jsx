
import React from 'react';
import { Navbar as NextUINavbar, NavbarBrand, Link, NavbarContent, NavbarItem, Button } from '@nextui-org/react';
import { VscAccount } from 'react-icons/vsc';

const Navbar = ({ session }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'relative', height: '60px' }}>
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
          height: '50px'
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
        <NavbarContent
          data-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '10px',
            width: '100%',
          }}
        >
          <NavbarItem>
            <Link color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link color="foreground" href="./Tasks">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
  <NavbarItem>
    <div className="flex flex-1 items-center justify-end space-x-2 gap-2 flex-wrap">
      {session ? (
        <div className="flex items-center space-x-2">
          <div className='flex flex-row items-center'>
            <VscAccount className="w-4 h-4" />
            <p className="ml-2">{session.user.email}</p>
            
          </div>
          <form action="/auth/signout" method="post" className="w-full sm:w-auto">
          <Button
            type="submit"
            className="custom-bg-color p-2 hover:bg-orange-400 rounded-md text-white w-full shadow-lg flex flex-row items-center"
            >
            Logout
          </Button>
            {/* <Button type="submit" className="w-full sm:w-auto bg-red-400 shadow-sm">Sign Out</Button> */}
          </form>
        </div>
      ) : (
        <Link color="foreground" href="/login" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto"></Button>
        </Link>
      )}
    </div>
  </NavbarItem>
</NavbarContent>

      </NextUINavbar>
    </div>
  );
};

export default Navbar;
