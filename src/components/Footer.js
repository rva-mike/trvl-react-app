import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the <b>'Adventure Newsletter'</b> to receive our best vacation deals!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline' >Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/trvl-react-app'>How it works</Link>
                        <Link to='/trvl-react-app'>Testimonials</Link>
                        <Link to='/trvl-react-app'>Careers</Link>
                        <Link to='/trvl-react-app'>Investors</Link>
                        <Link to='/trvl-react-app'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/trvl-react-app'>Contact</Link>
                        <Link to='/trvl-react-app'>Support</Link>
                        <Link to='/trvl-react-app'>Destinations</Link>
                        <Link to='/trvl-react-app'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/trvl-react-app'>Submit Video</Link>
                        <Link to='/trvl-react-app'>Ambassadors</Link>
                        <Link to='/trvl-react-app'>Agency</Link>
                        <Link to='/trvl-react-app'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/trvl-react-app'>Instagram</Link>
                        <Link to='/trvl-react-app'>Facebook</Link>
                        <Link to='/trvl-react-app'>Youtube</Link>
                        <Link to='/trvl-react-app'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/trvl-react-app' className='social-logo'>
                            TRVL
                            <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © 2023</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/trvl-react-app'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/trvl-react-app'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/trvl-react-app'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/trvl-react-app'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/trvl-react-app'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;