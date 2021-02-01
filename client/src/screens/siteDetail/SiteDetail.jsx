import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import { getOneSite } from '../../services/campsites';

const SiteDetail = (props) => {
  const [campsite, setCampsite] = useState()
  const { id } = useParams()
  const {user} = props
  useEffect(() => {
    const fetchCampsite = async () => {
      const siteData = await getOneSite(id);
      setCampsite(siteData);
    }
    fetchCampsite();
  }, [id]);

  return (
  <>
    { campsite &&  
      
      <div className='site-detail'>
        <div className='img-container'>
          <img src={campsite.image} alt='No Image Provided' />
        </div>
        <div className='info-container'>
          <h3>{campsite.name}</h3>
          <p>{campsite.description}</p>
        </div>
        <Comments campsite={campsite} user={user} setCampsite={setCampsite}/>
      </div>
    }
  </>
  );
};

export default SiteDetail;
