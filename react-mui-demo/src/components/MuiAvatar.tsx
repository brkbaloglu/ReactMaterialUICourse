import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

function MuiAvatar() {
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={1}>
            <Avatar sx={{bgcolor: "primary.light"}}>BW</Avatar>
            <Avatar sx={{bgcolor: "secondary.light"}}>CK</Avatar>
        </Stack>
        <Stack direction="row" spacing={1}>
            <AvatarGroup max={3}>
                <Avatar sx={{bgcolor: "primary.light"}}>BW</Avatar>
                <Avatar sx={{bgcolor: "secondary.light"}}>CK</Avatar>
                <Avatar src='http://rendomuser.me/api/portraits/women/79.jpg' alt="Jane Doe"></Avatar>
                <Avatar src='http://rendomuser.me/api/portraits/women/51.jpg' alt="John Doe"></Avatar>
            </AvatarGroup>    
        </Stack>
        <Stack direction="row" spacing={1}>
            <Avatar variant='square' sx={{bgcolor: "primary.light", width: 48, height: 48}}>BW</Avatar>
            <Avatar variant='rounded' sx={{bgcolor: "secondary.light"}}>CK</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar