import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
function MuiRating() {

    const [value, setValue] = useState<number | null>(null)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
  return (
    <Stack spacing={2}>
        <Rating value={value} precision={0.5} icon={<FavoriteIcon color="error" fontSize="inherit"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>} onChange={handleChange} ></Rating>
    </Stack>
  )
}

export default MuiRating