import React from 'react';
import './Landing.css'

const Landing = () => {

  return (
    <div className='landing'>
      <div className='park'>Green Ridge <span>State Forest</span></div>
      <div className='about-park'>
        <p>Welcome to Green Ridge State Forest. At 49,000 acres, Green Ridge is the largest contiguous block of public land in Maryland. Located within the Ridge and Valley Province of the Appalachian Mountains it is rich in both both natural and cultural heritage</p>
      </div>
      <div className='about-site'>
        <p>Camp Connect is a campsite tracking tool for Green Ridge state forest in Flinstone MD. The User will be able to track which campsites of the 100 available sites at the park they have visited. Each campsite will have an overview screen with details and features about that site. Users can leave comments on specific site as well as edit and delete those comments.</p>
      </div>
      
    </div>
    
  );
};

export default Landing;