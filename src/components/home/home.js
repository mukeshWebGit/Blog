import React from 'react';
import Banner from '../account/banner';
import { Grid } from '@mui/material';
import Categories from './categories';

const Home = () => {
    return (
        <div>
           <Banner heading="Welcome to the Home Page" subheading="This is the home page of our application." />
           <Grid container spacing={2} style={{ padding: '20px' }}>
              <Grid item xs={12} sm={4} md={3}>
                  <Categories />
              </Grid>
              <Grid item xs={12} sm={8} md={7}>
                  <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                  <h2>Home Page Content</h2>
              <p>This is where you can add more content related to the home page.</p>
              <p>Feel free to customize this page as per your requirements.</p>
                  </div>
              </Grid>
             
              </Grid>
           
        </div>
    );
};

export default Home;