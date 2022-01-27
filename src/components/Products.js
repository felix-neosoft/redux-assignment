import React from 'react'
import {connect} from 'react-redux'
import {Card, CardMedia, CardContent, Typography, Button, Grid} from '@mui/material'
import products from '../products.json'

function Products(props) {
    return (
        <div>
            <Grid container>
            {products.products.map((value,index)=>(
                <Grid item sx={{my:3}} xs={3}>
                    <Card key={index} sx={{ width:345, height:380, mx:"auto"}}>
                        <CardMedia component="img" height="200" image={value.images} alt="Paella dish" />
                        <CardContent>
                            <Typography align="center" variant="h5" color="text.secondary">{value.pname}</Typography>
                            <Typography  variant="subtitle1" color="text.secondary">Price : {value.price}</Typography>
                            <Typography  variant="subtitle1" color="text.secondary">Quantity : {value.quantity} </Typography>
                            <Button onClick={()=>props.addToCart(index)} sx={{float:"right" , mr:2, my:2}} variant="outlined">Add To Cart</Button>
                        </CardContent>
                    </Card>
                </Grid>
                
            ))}
            </Grid>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart:function(id){
            let data = products.products[id]
            let localData = JSON.parse(localStorage.getItem('cartData')) || []
            localData.push(data)
            localStorage.setItem('cartData',JSON.stringify(localData))
            dispatch({type:"data",data})
        }
    }
}
export default connect(null,mapDispatchToProps)(Products)
