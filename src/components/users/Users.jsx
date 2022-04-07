import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../userAction';

function Users() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const users = useSelector(state => state.user.data)

  const fetchData = async () => {
    const { data } = await axios.get('https://reqres.in/api/users');
    dispatch(getAllUsers(data.data));
  };

  const getSingleUser = async (id) => {
    try {
      let {data:{data}} = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        {
          user ? <User user={ user} /> : <UserPlaceholder />
        }
      <div className='row mx-0'>
        {/* {users?.map((user) => (
          <User key={user.id} user={user} />
        ))} */}
          <div className='btn-group'>
            {
              users.map(user =>  <button key={user.id} onClick={() => getSingleUser(user.id)}>{user.id}</button>)
            }
          </div>
      </div>
    </div>
  );
}

function UserPlaceholder () {
  return (
    <div className='user-placeholder'>
        <p>click button to show corresponding user</p>
    </div>
  )
}

export default Users;
