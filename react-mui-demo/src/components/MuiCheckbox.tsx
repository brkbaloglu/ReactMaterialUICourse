import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material"
import { useState } from "react"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import BookmarkIcon from "@mui/icons-material/Bookmark"


function MuiCheckbox() {

    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={acceptTnC} onChange={handleChange}/>} label="I accept terms and conditions"></FormControlLabel>
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={acceptTnC} onChange={handleChange}></Checkbox>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value="html" checked={skills.includes("html")} onChange={handleSkillChange}/>} label="HTML"></FormControlLabel>
                    <FormControlLabel control={<Checkbox value="css" checked={skills.includes("css")} onChange={handleSkillChange}/>} label="CSS"></FormControlLabel>
                    <FormControlLabel control={<Checkbox value="javascript" checked={skills.includes("javascript")} onChange={handleSkillChange}/>} label="Javascript"></FormControlLabel>
                </FormGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox