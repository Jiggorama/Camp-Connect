import React from 'react';
import { Link } from 'react-router-dom';
import './Sites.css'

const Sites = (props) => {
  const { sites, user} = props

  return (
    <>
      <div className='title'>Campsites:</div>
    <div className='campsites'>
        {sites.sort().map(site => {
        return(
          <>
{user ?
<>
    {site.users.some(camper => {
return camper.id === user.id
}) ?
<div className='campsite camped-here' key = {site.id}>
<Link to = {`/sites/${site.id}`}>
{site.name}
</Link>
</div> :
<div className='campsite' key = {site.id}>
<Link to = {`/sites/${site.id}`}>
{site.name}
</Link>
</div>
    } 
  </> :
  <div className='campsite' key = {site.id}>
<Link to = {`/sites/${site.id}`}>
{site.name}
</Link>
</div>
}
</>
        )
      })}
    </div>
      </>
  );
};

export default Sites;
{/* <>
{user ?
<>
    {site.users.some(camper => {
return camper.id === user.id
}) ?
<div className='campsite--camped-here' key = {site.id}>
<Link to = {`/sites/${site.id}`}>
{site.name}
</Link>
</div> :
<div className='campsite' key = {site.id}>
<Link to = {`/sites/${site.id}`}>
{site.name}
</Link>
</div>
    } 
  </> :
  <div className='campsite' key = {site.id}>
<Link to = {`/sites/${site.id}`}>
{site.name}
</Link>
</div>
}
</> */}