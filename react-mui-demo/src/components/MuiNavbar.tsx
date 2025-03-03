import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"
import { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"


function MuiNavbar() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge="start" color='inherit' aria-label='logo'>
                <CatchingPokemonIcon></CatchingPokemonIcon>
            </IconButton>
            <Typography variant='h6' component="div" sx={{ flexGrow: 1}}>
                POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit' id='resources-button' onClick={handleClick} aria-control={open ? "resources-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} endIcon={<KeyboardArrowDownIcon/>}>Resources</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            <Menu open={open} MenuListProps={{
                "aria-labelledby": "resources-button",
            }}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            onClose={handleClose} 
            id='resources-menu' anchorEl={anchorEl}>
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar