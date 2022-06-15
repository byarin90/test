import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "./features/snippet/carsSlice";
import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import ImgMediaCard from "./comps/card";
import { Box } from "@mui/system";
import { lightBlue,amber,deepOrange,lime, green } from "@mui/material/colors";
import {ThemeProvider,createTheme  } from "@mui/material/styles";
import Header from "./comps/header";


const custom = createTheme({
  palette:{
  primary:amber,
  secondary:green,
  error:deepOrange,
  success:lightBlue,
  info:lime

  }
});

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.carsReducer.cars);
  useEffect(() => {
    doApi()
  }, [dispatch]);//every update of reducers refresh
  console.log(data)

  const doApi = () => {
    dispatch(getCars());
  }
 
  return (
    <div  >
  <Header/>
      <ThemeProvider theme={custom}>
      <Container maxWidth="md">
        <Typography color={'secondary'} variant="h2" align="center" fontWeight={400} marginY={'20px'} gutterBottom>
          Welcome to React Redux Toolkit Cars Project
        </Typography>


        </Container>

        
  <Container  maxWidth={'lg'}>
        <Box paddingY={5}>
          <Grid   container  spacing={{ xs: 5, md:5 }} columns={{ xs: 1, sm: 8, md: 6 }}>
            {data && data.map(car => (
              <Grid   item xs={12} sm={4} md={2} key={car._id}>
                <ImgMediaCard item={car} />

              </Grid>
            ))}
          </Grid>
        </Box>
        </Container>
        </ThemeProvider>
    </div>
  );
}

export default App;
