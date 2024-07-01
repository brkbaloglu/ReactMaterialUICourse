import React from 'react'
import { Typography } from "@mui/material"


function MuiTypography() {
  return (
    <div>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>

        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, id.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, qui.</Typography>
    </div>
  )
}

export default MuiTypography