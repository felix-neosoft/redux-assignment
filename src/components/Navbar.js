import { AppBar, Box, Link, Toolbar} from '@mui/material'
import React from 'react'
import {connect} from 'react-redux'

function Navbar(props) {
    return (
        <div>
            <Box sx={{flexGrow:1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Link sx={{color:"white", fontSize:25, py:1,px:2, textDecoration:"none"}} href="/">Home</Link>
                        <Link sx={{color:"white", fontSize:25, py:1,px:2, textDecoration:"none"}} href="/products">Products</Link>
                        <Link sx={{color:"white", fontSize:25, py:1,px:2, textDecoration:"none", position:"absolute", right:50}} href="/cart">Cart<sup>{props.cartNumber}</sup></Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartNumber:state.cart.length-1
    }
}

export default connect(mapStateToProps)(Navbar)



