import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function ExternalUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect( () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {
//         users.map(user => <UserData name={user.name} userName={user.username} email={user.email}></UserData>)
//       }
      
//     </div>
//   );
// }

// function UserData (props) {
//   return (
//     <div style={{ border: '2px solid red', margin: '2rem 4rem' }}>
//       <h3>Name: {props.name}</h3>
//       <h5>User Name: {props.username}</h5>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }



// function State() {
//   const [count, setCount] = useState(0);
//   const increaseCount = () => setCount(count + 1);
//   return (
//     <div>
//       <h1>Counter: {count} </h1>
//       <button onClick={increaseCount}>Increase</button>
//     </div>
//   );
// }


export default App;
