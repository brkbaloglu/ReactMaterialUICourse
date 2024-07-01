import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

function MuiProgress() {
  return (
    <Stack spacing={2}>
        <CircularProgress></CircularProgress>
        <CircularProgress color='success'></CircularProgress>
        <CircularProgress variant='determinate' value={60}></CircularProgress>

        <LinearProgress></LinearProgress>
        <LinearProgress color='success'></LinearProgress>
        <LinearProgress variant='determinate' value={60}></LinearProgress>
    </Stack>
  )
}

export default MuiProgress