import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col} from 'reactstrap';
import {motion} from 'framer-motion';
import heroImg from '../assets/images/c7e39f89a9b8c12b1737af559d994901-fococlipping-standard.png';
import '../Style/Home.css';
import {Link} from "react-router-dom";

const Home = () => {

    const year = new Date().getFullYear();
    return(
        <Helmet title={'Home'}>
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">
                                Best Selling Products in {year}
                            </p>
                            <h2>Love is Four-legged World.</h2>
                            <p>Your Pet Deserves The Best Care For Happier Life </p>

                            <motion.button whiltTap={{scale:1.2}} className="buy_btn">
                                <Link to='catshop'>
                                    Shop for Cat
                                </Link>
                            </motion.button>

                            <motion.button whiltTap={{scale:1.2}} className="buy_btn">
                                <Link to='dogshop'>
                                Shop for Dog
                                </Link>
                            </motion.button>
                        </div>
                    </Col>


                    <Col lg='6' md='6' >
                        <div className="hero_img">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </Helmet>
    );
};

export default Home;