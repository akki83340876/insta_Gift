import React from 'react';
import { error } from '../../Utils/images';

const Error = () => {
  return (
    <div className='container'>
        <div className = "flex flex-center error">
            <img src = {error} alt = "error" />
        </div>
    </div>
  )
}

export default Error;