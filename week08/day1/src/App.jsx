import "./App.css";
import { Button } from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import { SignupForm } from "./components/SignupForm";
import { TaskManager } from "./components/TaskManger";

const cards = [
  { id: 1, title: "Home", body: "Welcome home" },
  { id: 2, title: "About", body: "About us" },
  { id: 3, title: "Contact", body: "Get in touch" },
];
function App() {
  return (
    <>
      <Container>
        <Card title="Welcome">
          <p>This is the first card.</p>
          <Button>Click me</Button>
        </Card>
        <Card title="About">
          <p>This is the second card.</p>
          <Button>More info</Button>
        </Card>
      </Container>

      <Container>
        {cards.map((card) => (
          <Card key={card.id} title={card.title}>
            <p>{card.body}</p>
          </Card>
        ))}
      </Container>

      <TaskManager />

      <SignupForm />
    </>
  );
}

export default App;
