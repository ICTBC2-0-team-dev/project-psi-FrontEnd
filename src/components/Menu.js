import React from "react";
import { Drawer, IconButton, Link, List, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useLocation } from "react-router-dom";

const Menu = ({ links }) => {
    const [open, setOpen] = React.useState({
        open: false,
    });
    const location = useLocation();

    let CustomListItem = ({ to, primary }) => (
        <ListItemButton component={Link} to={to} selected={to === location.pathname}>
            <ListItemIcon>
                <ListItemText primary={primary} />
            </ListItemIcon>
        </ListItemButton>
    );
    return (
        <>
            <Paper elevation={3} >
                <Drawer open={open} onClose={() => setOpen(false)} >
                    <List>
                        {/* {links.map((link, index) => (
                            <ListItemButton key={index} divider>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>{link}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))} */}

                        <CustomListItem to="/" primary="Accueil" />
                        <CustomListItem to="/" primary="Services" />
                        <CustomListItem to="/" primary="À propos de nous" />
                        <CustomListItem to="/" primary="Média" />
                        <CustomListItem to="/" primary="Contact" />
                        {/* <Link href="/">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>Accueil</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="#">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>Services</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="#">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>À propos de nous</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="#">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>Actualités</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                        <Link href="#">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListItemText sx={{ color: 'dark' }}>Contact</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link> */}
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