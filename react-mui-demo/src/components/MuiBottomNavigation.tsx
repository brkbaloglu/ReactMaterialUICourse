import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
import { useState } from 'react'


function MuiBottomNavigation() {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation value={value} onChange={(event, newValue) => {
        setValue(newValue)
    }}
    showLabels 
    sx={{width: "100%", position: "absolute", bottom: 0}}>
        <BottomNavigationAction label="Home" icon={<HomeIcon/>}></BottomNavigationAction>        
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}></BottomNavigationAction>        
        <BottomNavigationAction label="Profile" icon={<PersonIcon/>}></BottomNavigationAction>        
    </BottomNavigation>
  )
}

export default MuiBottomNavigation