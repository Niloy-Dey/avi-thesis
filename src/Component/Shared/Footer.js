import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../asset/Images/Logo/Avinil-Logo-1-universal.png'
const Footer = () => {
    return (
        <div>

            {/* Footer Start  */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="row g-2 pt-2">
                                {/* logo add here  */}
                                <img className='w-50' src="" alt="" />
                                <h5  className='text-white mt-4'>A Software Development & Information Technology Company </h5 >
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-3">Quick Link</h4>
                            <Link to="/" className="btn btn-link" href="">About Us</Link>
                            <Link to="/" className="btn btn-link" href="">Contact Us</Link>
                            <Link to="/" className="btn btn-link" href="">Privacy Policy</Link>
                            <Link to="/" className="btn btn-link" href="">Terms & Condition</Link>
                            <Link to="/" className="btn btn-link" href="">FAQs & Help</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>BGCTUB, Chattogram, Bangladesh</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+8801874819713</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>avishekdevnath@gmail.com</p>
                            <div className="d-flex pt-2">
                                {/* <Link target='_blank' to="" Style="background: " className="btn bg-danger btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></Link> */}
                                <Link target='_blank' to="https://www.facebook.com/profile.php?id=61550537558799" Style="background: " className="btn bg-primary btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></Link>
                                {/* <Link target='_blank' to="" Style="background:green " className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></Link> */}
                                <Link target='_blank' to="https://www.linkedin.com/in/avinil-it-ltd-822162295/" Style="background:#FFA41B " className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-3">Subscribe Now</h4>
                            <p>Complete the subscription for our Update news and Your future Career.</p>
                            <div className="position-relative mx-auto" Style="max-width: 400px;">
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" Style="background: #00DFA2" className="btn text-white  py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link to="/home" className="border-bottom"> </Link>, All Right Reserved.

                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to="/"  >Home</Link>
                                    <Link to="/"  >Cookies</Link>
                                    <Link to="/"  >Help</Link>
                                    <Link to="/"  >FQAs</Link>
                                    <Link to="/"  >Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}


        </div>
    );
};

export default Footer;