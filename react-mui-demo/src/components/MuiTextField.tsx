import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

function MuiTextField() {

    const [value, setValue] = useState("")

  return (
    <div>
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="outlined"></TextField>
                <TextField label="Name" variant="filled"></TextField>
                <TextField label="Name" variant="standard"></TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary"></TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Form Input" required value={value} onChange={(e) =>setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do not share your password with anyone"}></TextField>
                <TextField label="Password" type="password" helperText="Do not share your password with anyone"></TextField>
                <TextField label="Read only" InputProps={{readOnly: true}}></TextField>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Amount" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}></TextField>
                <TextField label="Amount" InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}></TextField>
            </Stack>
        </Stack>        
    </div>
  )
}

export default MuiTextField