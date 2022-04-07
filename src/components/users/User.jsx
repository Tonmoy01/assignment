import React from 'react';

function User({ user }) {
  const { avatar, first_name, last_name, email } = user;

  return (
    <div className='col-md-6'>
      <div className='card mb-4 mx-auto shadow-sm'>
        <div className='card-body'>
          <div className='text-center'>
            <img src={avatar} alt={avatar} />
          </div>
          <h1 className='text-center mt-2'>{`${first_name} ${last_name}`}</h1>
          <p className='text-center'>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
