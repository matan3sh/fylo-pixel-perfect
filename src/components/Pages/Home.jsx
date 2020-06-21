import React from 'react';

import showcase from '../../assets/img/illustration-intro.png';

const Home = () => {
  return (
    <section className='showcase'>
      <div className='showcase-body'>
        <img src={showcase} alt='' />
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className='btn'>Get Started</button>
      </div>
    </section>
  );
};

export default Home;
