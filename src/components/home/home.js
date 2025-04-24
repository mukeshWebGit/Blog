import React from 'react';
import Banner from '../account/banner';

const Home = () => {
    return (
        <div>
           <Banner heading="Welcome to the Home Page" subheading="This is the home page of our application." />
           <h2>Home Page Content</h2>
              <p>This is where you can add more content related to the home page.</p>
              <p>Feel free to customize this page as per your requirements.</p>
        </div>
    );
};

export default Home;