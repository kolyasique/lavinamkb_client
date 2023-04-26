import axios from 'axios';
import { useEffect, useState } from 'react';
import cl from './shared/styles/AppStyles.module.scss';

// Modules
import Header from './modules/Header';
import SideMenu from './modules/SideMenu';
import WorkSpace from './modules/WorkSpace';
// axios.get(`http://localhost:5000/users`)
//       .then(res => {
//         const persons = res.data;
//         setUsers({ persons });

//       })
// async function getUsers() {
//       const { data } = await axios.get('http://localhost:5000/users');
//     return {data}
//     }

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const { data } = await axios.get('http://localhost:5000/users/getall');
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <div className={cl.App}>

      <header className={cl.App_header}>
        <Header />
      </header>

      <div className={cl.App_workSpace}>
        {/* {users.map((el) => {
        return (
            <p key={el.id}>{el.email}</p>
        )
      })} */}
        <SideMenu />
        <WorkSpace />
      </div>
    </div>
  );
}

export default App;
