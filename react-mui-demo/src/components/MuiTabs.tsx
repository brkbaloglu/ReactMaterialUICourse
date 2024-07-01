import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'


function MuiTabs() {
    const [value, setValue] = useState("1")

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

  return (
    <Box>
        <TabContext value={value}> 
            <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                <TabList textColor='secondary' indicatorColor='secondary' centered onChange={handleChange} aria-label="Tabs example">
                    <Tab icon={<FavoriteIcon/>} iconPosition='start' label="Tab 1" value="1"></Tab>
                    <Tab label="Tab 2" value="2"></Tab>
                    <Tab label="Tab 3" value="3"></Tab>
                </TabList>
            </Box>
            <TabPanel value='1'>Panel 1</TabPanel>
            <TabPanel value='2'>Panel 2</TabPanel>
            <TabPanel value='3'>Panel 3</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs