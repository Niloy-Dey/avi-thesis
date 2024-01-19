import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import MainPage from '../MainPage/MainPage';
// import Loading from '../Shared/Loading';

const Home = () => {

    const backgroundImageStyle = {
        backgroundImage: 'url("https://cdn.brandmentions.com/blog/wp-content/uploads/2019/05/sentiment-analysys-brandmentions.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };



    return (
        <div style={backgroundImageStyle} className='bg-white'>

            <Navbar></Navbar>



           <MainPage></MainPage>




            <Footer></Footer>
        </div>
    );
};

export default Home;