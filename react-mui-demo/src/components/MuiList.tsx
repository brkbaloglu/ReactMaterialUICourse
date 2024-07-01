import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MailIcon from "@mui/icons-material/Mail"

function MuiList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef"}}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon><ListItemAvatar><Avatar><MailIcon></MailIcon></Avatar></ListItemAvatar></ListItemIcon>
                    <ListItemText primary="List item 1" secondary="Secondary text"></ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider></Divider>
            <ListItem>
                <ListItemIcon><ListItemAvatar><Avatar><MailIcon></MailIcon></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary="List item 2" secondary="Secondary text"></ListItemText>
            </ListItem>
            <Divider></Divider>
            <ListItem>
                <ListItemIcon><ListItemAvatar><Avatar><MailIcon></MailIcon></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary="List item 3" secondary="Secondary text"></ListItemText>
            </ListItem>
        </List>        
    </Box>
  )
}

export default MuiList