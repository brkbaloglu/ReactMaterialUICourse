import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

function MuiRadioButton() {
  const [value, setValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup value={value} onChange={handleChange} name="job-experience-group" aria-labelledby="job-experience-group-label" row>
          <FormControlLabel control={<Radio size="medium" color="secondary"/>} label="0-2" value="0-2"></FormControlLabel>
          <FormControlLabel control={<Radio />} label="3-5" value="3-5"></FormControlLabel>
          <FormControlLabel control={<Radio />} label="6-10" value="6-10"></FormControlLabel>
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton