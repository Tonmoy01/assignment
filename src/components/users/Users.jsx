import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../userAction';

function Users() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const users = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.user.loading);

  const fetchData = async () => {
    const { data } = await axios.get('https://reqres.in/api/users');
    // dispatch({ type: 'GET_LOADING' });
    dispatch(getAllUsers(data.data));
  };

  const getSingleUser = async (id) => {
    try {
      let {
        data: { data },
      } = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(users);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='row d-flex'>
        {loading
          ? 'loading'
          : users?.map((user) => <User key={user.id} user={user} />)}
      </div>
      <div className='d-flex align-items-center flex-column'>
        {loading ? (
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        ) : null}
        {user ? <User user={user} /> : <UserPlaceholder />}
        <div className='row mx-0'>
          <div className='btn-group'>
            {users.map((user) => (
              <button
                className='btn btn-outline-primary mx-2 mb-5'
                key={user.id}
                onClick={() => getSingleUser(user.id)}
              >
                {user.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function UserPlaceholder() {
  return (
    <div className='row'>
      <div
        className='card mb-3'
        style={{ height: '250px', width: '500px', fontSize: '20px' }}
      >
        <div className='card-body d-flex align-items-center justify-content-center'>
          <p className='m-0 text-primary text-center'>
            Click button to show corresponding user
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
