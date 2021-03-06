import React from 'react';

// Material-ui imports
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

import {
  HomeRoute,
  LoginRoute,
  CreateAccountRoute,
  UpdateAccountRoute,
} from './routes';

const ListItems = (
  <div>
    <a href={`/#${HomeRoute}`} style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </a>
    <a href={`/#${LoginRoute}`} style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItem>
    </a>
    <a href={`/#${CreateAccountRoute}`} style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Create Account" />
      </ListItem>
    </a>
    <a href={`/#${UpdateAccountRoute}`} style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Update Account" />
      </ListItem>
    </a>
  </div>
);

export default ListItems;
