

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import React from 'react';
import { Link } from "react-router-dom";
const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route:"/" },
        { id: 2, name: 'Archives', icon: <Archive />, route:"/archive" },
        { id: 3, name: 'Trash', icon: <Delete />, route:"/delete" }
    ]
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem key={list.id} >
                        < Link to={list.route} style={{display:'flex',textDecoration:'none',color: 'inherit'}}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                        </Link>
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;