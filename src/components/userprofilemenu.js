
import React, { useState } from 'react';
import './ecommerssite.css'
import { Button } from 'react-bootstrap';

const UserProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="user-profile">
      <Button onClick={() => setOpen(!open)}>Admin</Button>
      {open && (
        <ul className="dropdown">
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserProfileMenu;