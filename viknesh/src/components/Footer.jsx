import React from 'react'
import { Link, Typography } from '@mui/material'

const Footer = (props) => {
  return (
    <Typography variant='body2' 
    color={'text.secondary'} 
    align='center' {...props} 
    >
         This website belongs to Department of Posts, Ministry of Communications, GoI.<br/>
          {'Copyright © '}
          <Link color='inherit' 
          href='https://cept.gov.in/' target={'_blank'}>
            CEPT
          </Link>
          {` ${new Date().getFullYear()}.`}
    </Typography>
  )
}

export default Footer