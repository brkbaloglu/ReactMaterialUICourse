import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'

function MuiTimeline() {
  return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">09.30 am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'></TimelineDot>
                <TimelineConnector></TimelineConnector>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">10.00 am</TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'></TimelineDot>
                <TimelineConnector></TimelineConnector>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">10.30 am</TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'></TimelineDot>
                <TimelineConnector></TimelineConnector>
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline