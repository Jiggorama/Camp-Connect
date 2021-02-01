import React from 'react';
import { Link } from 'react-router-dom';

const Sites = (props) => {
  const {sites} = props
  return (
    <div className='campsites'>
      {sites.map(site => {
        return(
          <div className='campsite' key = {site.id}>
          <Link to = {`/sites/${site.id}`}>
            {site.name}
          </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Sites;