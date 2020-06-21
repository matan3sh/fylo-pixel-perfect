import React from 'react';

import illustration from '../../assets/img/illustration-stay-productive.png';
import arrow from '../../assets/img/icon-arrow.svg';
import profile1 from '../../assets/img/profile-1.jpg';
import profile2 from '../../assets/img/profile-2.jpg';
import profile3 from '../../assets/img/profile-3.jpg';

const Team = () => {
  return (
    <section className='team' id='team'>
      <div>
        <div className='team-body'>
          <img src={illustration} alt='' />
          <div className='team-desc'>
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <span className='team-active'>
              See how Fylo works <img src={arrow} alt='' />
            </span>
          </div>
        </div>

        <div className='team-cards'>
          <div className='team-card'>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className='team-member'>
              <img src={profile1} alt='' />
              <div>
                <p className='member-name'>Satish Patel</p>
                <p className='member-role'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className='team-card'>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className='team-member'>
              <img src={profile2} alt='' />
              <div>
                <p className='member-name'>Bruce McKenzie</p>
                <p className='member-role'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className='team-card'>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className='team-member'>
              <img src={profile3} alt='' />
              <div>
                <p className='member-name'>Iva Boyd</p>
                <p className='member-role'>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
