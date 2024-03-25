import { Component } from 'react'
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

const wrapperStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0, 
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

class Preloader extends Component {

  componentDidMount(){
    this.props.load().then((result) => {
        if(result){
          setTimeout(() => {
            this.props.setLeng(result.data)
          }, 1000)
        }
    })
  }
  componentWillUnmount(){}
  render() {
    return (
        <div style={wrapperStyle}> 
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
            </Box>
        </div>
    )
  }
}

export default Preloader