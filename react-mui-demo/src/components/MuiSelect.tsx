import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

function MuiSelect() {

    const [countries, setCountries] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === "string" ? value.split(",") : value)
    }
  return (
    <Box width="250px">
        <TextField onChange={handleChange} fullWidth size='small' color='secondary' helperText="Please select your country" error label="Select Country" SelectProps={{multiple: true}} select>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect