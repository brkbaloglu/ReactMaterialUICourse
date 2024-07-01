import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
        <Link href="#">Link</Link>
        <Typography variant='h6'>
            <Link href="#" color="secondary" underline="none">Secondary</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink