import logo from './logo.svg';
import './App.css';
import User from './components/User-info/User';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const [users, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/aa2c0ae3-29b4-4eba-9212-340cbe3de584')
    .then(res => res.json())
    .then(data => setUser(data))
  })

  const handleUserAdd = (user) => {
    const newCart = [...cart, user];
    setCart(newCart)
  }
  return (
    <div className="App">
      
      <h2>Total Users: {users.length}</h2>
      <Cart cart={cart}></Cart>
      {
        users.map(user => <User user={user} handleUserAdd={handleUserAdd} ></User>)
      }
    </div>
  );
}

export default App;
