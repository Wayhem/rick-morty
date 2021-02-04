import React from 'react'
import { useLocation } from 'react-router-dom'
import Image from 'Assets/images/it_was_me__dio__by_gonthedinosaur_d7thhhs-fullview.png'
import { Container, Box, Dio } from 'Components/pages/404/styles'

const NotFound = (): JSX.Element => {
  const location = useLocation()

  return (
    <Container>
      <img src={Image} alt='it was him' />
      <Box>
        {`You thought you found ${location.pathname}`}, <Dio>But it was me! DIO!</Dio>
      </Box>
    </Container>
  )
}

export default NotFound
