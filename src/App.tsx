import './App.css';
import { MutableRef } from './components/ref/MutableRef';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import { Box } from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Container } from './components/Container';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';


function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // }

  // const nameList =[
  //   {
  //     first:"Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first:"Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first:"Princess",
  //     last: "Diana",
  //   },

  // ]

  return (
    <div className="App">
      {/* <Greet name="Vishwas" messageCount={20} isLoggedIn={true}/> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status='loading' /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Loonardo Dicpario!</Heading>
      </Oscar> */}
      {/* <Greet name="Vishwas" isLoggedIn={true}/> */}
      {/* <Button handleClick={(event , id ) => {
        console.log("Button clicked", event , id)
      }} /> */}
      {/* <Input value='' handleChange={(event)=> console.log(event)} /> */}
      {/* <Container styles={{border: "1px solid black", padding: "1rem"}} /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <MutableRef/>
    </div>
  );
}

export default App;
