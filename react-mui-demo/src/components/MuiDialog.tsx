import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

function MuiDialog() {

    const [open, setOpen] = useState(false)

  return (
    <>
        <Button onClick={() => setOpen(true)}>
            Open dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="dialog-title" aria-describedby='dialog-description'>
            <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description">Are you sure you want to submit the test? You will not be able to edit after submitting</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} autoFocus>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog