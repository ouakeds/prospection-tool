import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface INavigation {
    label: string;
    link: string;
}

interface ICustomerDrawer {
    navigations: INavigation[]
}

const CustomDrawer: React.FC<ICustomerDrawer> = ({navigations}) => {
  return (
    <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar />
        <Divider />
        <List>
        {
            navigations.map(({label, link}, index) => (
                <Link to={link} key={index}>
                    <ListItem key={label} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={label} />
                            </ListItemButton>
                    </ListItem>
                </Link>

            ))
        }
        </List>
    </Drawer>
  );
}

export default CustomDrawer;