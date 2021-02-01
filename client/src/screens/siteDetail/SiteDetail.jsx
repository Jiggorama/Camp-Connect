import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import { getOneSite, visited, unvisited } from '../../services/campsites';

const SiteDetail = (props) => {
  const [campsite, setCampsite] = useState()
  const { id } = useParams()
  const { user } = props
  useEffect(() => {
    const fetchCampsite = async () => {
      const siteData = await getOneSite(id);
      setCampsite(siteData);
    }
    fetchCampsite();
  }, [id]);

  const addVisited = async () => {
    await visited(campsite.id, user.id)
    setCampsite(prevState => ({
      ...prevState,
      users: [...prevState.users, user]
    }))
  }
  const removeVisited = async () => {
    await unvisited(campsite.id, user.id)
    setCampsite(prevState => ({
      ...prevState,
      users: prevState.users.filter(current => {
        return current.id !== user.id       
      })
    }))    
  }


  return (
  <>
    { campsite &&  
      
      <div className='site-detail'>
        <div className='img-container'>
          <img src={campsite.image} alt='No Image Provided' />
        </div>
        <div className='info-container'>
          {user && <>
            {campsite.users.some(camper => {
              return camper.id === user.id
            }) ?
              <>
                <p>visited</p>
                <button onClick={removeVisited}>Remove</button>
              </> :
              <>
                <p>visited?</p>
                <button onClick={addVisited}>Yes</button>
              </>
            }
          </>}
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
