import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

type Skill = {
    id: number
    label: string
}

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"]

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

function MuiAutocomplete() {

    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete options={skills} value={value} onChange={(event: any, newValue: string | null) => setValue(newValue)} freeSolo renderInput={(params) => <TextField {...params} label="Skills"/>}></Autocomplete>
        <Autocomplete options={skillsOptions} value={skill} onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}  renderInput={(params) => <TextField {...params} label="Skills"/>}></Autocomplete>
    </Stack>
  )
}

export default MuiAutocomplete