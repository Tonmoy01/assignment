import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import { useDispatch } from 'react-redux';
import { storeUsers } from '../../userAction';
function Users() {
  const [usersData, setUsersData] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const { data } = await axios.get('https://reqres.in/api/users');
    setUsersData(data.data);
    dispatch(storeUsers(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='row mx-0'>
        {usersData?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
