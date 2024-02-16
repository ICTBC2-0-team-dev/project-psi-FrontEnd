import React from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Menu = ({ links }) => {
    const [open, setOpen] = React.useState({
        open: false,
    });
    return (
        <>
            <Paper elevation={3} > 
                <Drawer open={open} onClose={() => setOpen(false)} >
                    <List>
                        {links.map((link, index) => (
                            <ListItemButton key={index} divider>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>{link}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
            </Paper>
            <IconButton sx={{ marginLeft: 'auto', color: 'primary' }} onClick={() => setOpen(!open)}>
                <MenuRoundedIcon />
            </IconButton>
        </>
    )
}

export default Menu