import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography, CardMedia } from '@mui/material'
import React from 'react'
import {connect} from "react-redux"

function Cart(props) {
    let cartData = props.cartData.slice(0,props.cartData.length-1)
    console.log(cartData)
    let Sum = 0
    for(let i = 0; i<cartData.length;i++){
        Sum = Sum + cartData[i].price
    }
    return (
        <div>
            <Typography align="center" sx={{my:2}} variant="h3">Cart</Typography>
            <TableContainer sx={{width:1/2, mx:"auto"}} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr No.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartData.map((value,index)=>(
                            <TableRow>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{value.pname}</TableCell>
                                <TableCell><CardMedia sx={{  width:100, height:100}} component="img" image={value.images} alt="green iguana"/></TableCell>
                                <TableCell>{value.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>Total Price : {Sum}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        cartData:state.cart
    }
    
}

export default connect(mapStateToProps)(Cart)
