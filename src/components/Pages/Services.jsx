import React from 'react';

import security from '../../assets/img/icon-security.svg';
import access from '../../assets/img/icon-access-anywhere.svg';
import collaboration from '../../assets/img/icon-collaboration.svg';
import file from '../../assets/img/icon-any-file.svg';

const Services = () => {
  return (
    <section className='services' id='features'>
      <div className='services-body'>
        <div className='service-item'>
          <img src={access} alt='' />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className='service-item'>
          <img src={security} alt='' />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className='service-item'>
          <img src={collaboration} alt='' />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className='service-item'>
          <img src={file} alt='' />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
