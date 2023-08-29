import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <i>
              <b>CARTER</b>
            </i>
          </p>
        </NavbarBrand>
        <NavbarContent className="flex gap-6 items-center ml-auto">
          <NavbarItem>
            <Link to="#" className="text-foreground">
              Baby
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="#" aria-current="page">
              Toddler
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="#" className="text-foreground">
              Kids
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="#" className="text-foreground">
              Shoes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="#" className="text-foreground">
              Sale
            </Link>
          </NavbarItem>
          <NavbarItem>
          <button>
            <a href='/SignUpLog'>Login</a>
          </button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to="#"
              className={`w-full ${
                index === 2
                  ? 'text-primary'
                  : index === menuItems.length - 1
                  ? 'text-danger'
                  : 'text-foreground'
              }`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
