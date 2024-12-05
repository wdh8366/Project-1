import './App.css';
import axios from 'axios';

function App() {
  const getUserList = () => {
    axios
      .get('http://localhost:5001/api/users')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
  const addUser = () => {
    axios
      .post('http://localhost:5001/api/users', {
        name: '1234',
        email: '1234@email.com',
        password: '3234',
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
  return (
    <>
      <button onClick={() => addUser()}>create user</button>
      <button onClick={() => getUserList()}>show User</button>
      <div></div>
    </>
  );
}
export default App;
