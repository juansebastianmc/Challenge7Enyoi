import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import BackgroundHome from '../assets/BackgroundHome.jpg';



import './home.css';





export default function PaginaPrincipal() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const pages = [<Link to='/Users'>
        <Button
            style={{ color: '#ffffff', }}
            id="basic-button"
            onClick={handleClick}
        >
            Usuario
        </Button>
    </Link>,
    <Link to='/Portafolio'>
        <Button
            style={{ color: '#ffffff', }}
            id="basic-button"
            onClick={handleClick}
        >
            Portafolio
        </Button>
    </Link>,
    <Link to='/InformacionGeneral'>
        <Button
            style={{ color: '#ffffff', }}
            id="basic-button"
            onClick={handleClick}
        >
            Informacion general
        </Button>
    </Link>,
    <Link to='/Administracion'>
        <Button
            style={{ color: '#ffffff', }}
            id="basic-button"
            onClick={handleClick}
        >
            Administracion
        </Button>
    </Link>];
    const settings = [
        <Link to='/Portafolio'   >

            <Button
                style={{ color: '#ffffff', }}
                id="basic-button"
                onClick={handleClick}
            >
                Perfil
            </Button>
        </Link>, <Link to='/logout'>
            <Button
                style={{ color: '#ffffff', }}
                id="basic-button"
                onClick={handleClick}
            >
                Logout
            </Button>
        </Link>];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>

            <div className='header'>
                <AppBar style={{ backgroundColor: '#2b2b2b' }} position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Inicio
                            </Typography>

                            <Box

                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu

                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem
                                            style={{ backgroundColor: '#2b2b2b' }}
                                            key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#2b2b2b', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu

                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            style={{ backgroundColor: '#2b2b2b' }}
                                            key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>


            </div>
            <Grid container  >
                <div style={{ fontFamily: 'arial', position: 'relatie', width: '220vh', height: '100vh', backgroundImage: `url(${BackgroundHome})`, backgroundSize: 'cover' }}>
                    <h1 style={{ marginTop: '200px', textAlign: 'center', alignItems: 'center', color: 'white' }}>Soy Juan Sebastian Muñoz.</h1>

                    <h4 style={{ textAlign: 'center', alignItems: 'center', color: 'white' }}> Soy un Frontend developer de Bogotá, capaz de crear Web's utilizando ReactJs. Navega por el site clicando en el  Header y conoce mas.</h4>
                </div>
            </Grid>
        </>
    );
}

