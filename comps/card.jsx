import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


export default function ImgMediaCard({ item }) {

    return (
        <>
        {item.company &&
        <Card>
            
            <CardActionArea >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    image={item.img_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.company}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.info.slice(0,100)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>}
        </>
    );
}
