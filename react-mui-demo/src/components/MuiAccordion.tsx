import React, { useState } from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore" 
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
function MuiAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div>
        <Accordion expanded={expanded === "panel1"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}>
            <AccordionSummary id="panel1-header" aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum soluta dolorem magni placeat ratione necessitatibus numquam itaque aliquam commodi nemo odio nihil voluptas assumenda perspiciatis, eligendi ea odit inventore rerum illo adipisci cum quas eos? Quisquam, expedita. Sed odio temporibus laboriosam animi reiciendis molestias perspiciatis sunt modi nemo praesentium!</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}>
            <AccordionSummary id="panel1-header" aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum soluta dolorem magni placeat ratione necessitatibus numquam itaque aliquam commodi nemo odio nihil voluptas assumenda perspiciatis, eligendi ea odit inventore rerum illo adipisci cum quas eos? Quisquam, expedita. Sed odio temporibus laboriosam animi reiciendis molestias perspiciatis sunt modi nemo praesentium!</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}>
            <AccordionSummary id="panel1-header" aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum soluta dolorem magni placeat ratione necessitatibus numquam itaque aliquam commodi nemo odio nihil voluptas assumenda perspiciatis, eligendi ea odit inventore rerum illo adipisci cum quas eos? Quisquam, expedita. Sed odio temporibus laboriosam animi reiciendis molestias perspiciatis sunt modi nemo praesentium!</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion