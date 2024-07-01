import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function MuiCard() {
  return (
    <Box width="300px">
        <Card>
          <CardMedia component="img" height="140" image='http://source.unsplash.com/random' alt="unsplash image">

          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">React</Typography>
            <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odit illum expedita ab beatae et fugit sunt iste aliquid distinctio.</Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn more</Button>
          </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard