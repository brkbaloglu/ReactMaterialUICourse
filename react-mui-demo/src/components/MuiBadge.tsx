import { Badge, Stack } from '@mui/material'
import MailIcon from "@mui/icons-material/Mail"

function MuiBadge() {
  return (
    <Stack spacing={2} direction="row" >
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon/>
        </Badge>           

        <Badge badgeContent={100} color='primary' max={99}>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge