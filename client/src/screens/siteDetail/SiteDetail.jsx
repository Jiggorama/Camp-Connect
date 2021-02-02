import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { getOneSite, visited, unvisited } from '../../services/campsites';
import './SiteDetail.css'

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
          <div className='site-name'>{campsite.name}</div>
          {user && <>
            {campsite.users.some(camper => {
              return camper.id === user.id
            }) ?
            <div className = 'visited'>
                <div className='yes'>visited</div>
                <div onClick={removeVisited}><RemoveCircleOutlineIcon/></div>
              </div> :
              <div className = 'visited'>
                <div className='no'>visited?</div>
                <div onClick={addVisited}><AddCircleOutlineIcon/></div>
              </div>
            }
          </>}
            <div className='description'>{campsite.description}</div>
        </div>
        <Comments campsite={campsite} user={user} setCampsite={setCampsite}/>
      </div>
    }
  </>
  );
};

export default SiteDetail;
