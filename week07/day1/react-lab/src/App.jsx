import "./App.css";
import ProfileCard from "./components/ProfileCard.jsx";

// Extra Credit
const profiles = [
  {
    id: 1,
    name: "Wanjiru",
    role: "Frontend",
    avatar: "https://placehold.co/80",
  },
  {
    id: 2,
    name: "Salah",
    role: "Backend",
    avatar: "https://placehold.co/80",
  },
];

function App() {
  return (
    <>
      {profiles.map(({ id, name, role, avatar }) => (
        <ProfileCard name={name} role={role} avatar={avatar} key={id}>
          <small>Available for hire</small>
        </ProfileCard>
      ))}
    </>
  );
}

export default App;
