import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import { useState } from "react"

function MuiButton() {

    const [formats, setFormats] = useState<string | null>(null)

    console.log(formats);

    const handleFormatChange = ( _event: React.MouseEvent<HTMLElement>, updatedFormats: string | null ) => {
        setFormats(updatedFormats)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="info">Info</Button>
            <Button variant="contained" color="success">Success</Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant="contained" startIcon={<SendIcon/>} disableRipple>Send</Button>
            <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label="send" color="primary" size="small"> 
                <SendIcon></SendIcon>
            </IconButton>
        </Stack>
        <Stack direction="row">
            <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="alignment button group">
                <Button onClick={() => alert("Left button clicked")} >Left</Button>
                <Button onClick={() => alert("Right button clicked")}>Right</Button>
                <Button onClick={() => alert("Center button clicked")}>Center</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction="row">
            <ToggleButtonGroup size="small" color="success" orientation="vertical" exclusive aria-label="text formatting" value={formats} onChange={handleFormatChange}>
                <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon></FormatBoldIcon></ToggleButton>
                <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon></FormatItalicIcon></ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon></FormatUnderlinedIcon></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton