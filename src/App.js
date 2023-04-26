import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

// axios.get(`http://localhost:5000/users`)
//       .then(res => {
//         const persons = res.data;
//         setUsers({ persons });

//       })
// async function getUsers() {
//       const { data } = await axios.get('http://localhost:5000/users');
//     return {data}
//     }

function App () {
  const [users, setUsers] = useState([])

  async function getUsers () {
    const { data } = await axios.get('http://localhost:5000/users')
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  console.log(users)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        {users.map((el) => {
          return (
            <p key={el.id}>{el.email}</p>
          )
        })}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
