import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

function MuiSwitch() {

    const [checked, setChecked] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    console.log(checked);
    
  return (
    <Box>
        <FormControlLabel label="Dark mode"  control={<Switch onChange={handleChange} checked={checked} size='small' color='primary'/>}></FormControlLabel>
    </Box>
  )
}

export default MuiSwitch