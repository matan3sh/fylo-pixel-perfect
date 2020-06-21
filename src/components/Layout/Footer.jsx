import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='newsletter'>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className='newsletter-footer'>
            <input type='text' placeholder='email@example.com' />
            <button className='btn'>Get Started For Free</button>
          </div>
        </div>
      </footer>
      <div className='bottom'>
        <div>ONE</div>
        <div>ONE</div>
        <div>ONE</div>
        <div>ONE</div>
        <div>ONE</div>
      </div>
    </>
  );
};

export default Footer;
