import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const styles = {
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    marginTop: "40px",
    justifyItems: "center",
    alignItems: "start",
  },

  flexcard: {
    width: "100%",
    maxWidth: "400px",
    border: "1px solid #5C6AC4",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },

  flexcardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  title: {
    color: "#5C6AC4",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    margin: "5px 0 15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
  },

  inputFocus: {
    borderColor: "#5C6AC4",
    boxShadow: "0 0 8px rgba(92,106,196,0.4)",
  },

  button: {
    padding: "8px 15px",
    margin: "5px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#5C6AC4",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },

  buttonHover: {
    backgroundColor: "#7a84d2",
    boxShadow: "0 0 10px #5C6AC4",
    transform: "translateY(-2px)",
  },

  tiles: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },

  output: {
    marginTop: "10px",
    fontWeight: "600",
    fontSize: "16px",
    color:'black',
  },

  landingPage: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #5c6ac4, #8a92d1)",
    color: "#fff",
    textAlign: "center",
  },

  welcomeTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
  },

  welcomeText: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
};

const myJsonData = [
  {
    id: 1,
    name: "ChatApp",
    category: "Messaging",
    description:
      "A real-time chat application with group chat, emojis, and media sharing.",
    techStack: ["React", "Node.js", "Socket.io"],
  },
  {
    id: 2,
    name: "FoodieApp",
    category: "Food Delivery",
    techStack: ["React Native", "Express", "MongoDB"],
  },
  {
    id: 3,
    name: "ShopEasy",
    category: "E-commerce",
    techStack: ["React", "Redux", "Firebase"],
  },
  {
    id: 4,
    name: "FitnessPro",
    category: "Health & Fitness",
    techStack: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    name: "EduLearn",
    category: "Education",
    techStack: ["Next.js", "GraphQL", "MongoDB"],
  },
  {
    id: 6,
    name: "TravelMate",
    category: "Travel",
    techStack: ["React", "Spring Boot", "MySQL"],
  },
  {
    id: 7,
    name: "BankX",
    category: "Finance",
    techStack: ["React Native", "Java", "OracleDB"],
  },
  { id: 8, name: "MediCare", techStack: ["React", "Django", "PostgreSQL"] },
  {
    id: 9,
    name: "NewsHub",
    category: "News",
    techStack: ["React", "Redux", "Node.js"],
  },
  {
    id: 10,
    name: "MovieBox",
    category: "Entertainment",
    techStack: ["React", "Express", "MongoDB"],
  },
];

const weatherData = [
  { city: "Mumbai", temp: 32, humidity: 70, windSpeed: 12 },
  { city: "Delhi", temp: 34, humidity: 55, windSpeed: 15 },
  { city: "Bangalore", temp: 28, humidity: 65, windSpeed: 10 },
  { city: "Chennai", temp: 33, humidity: 75, windSpeed: 18 },
  { city: "Pune", temp: 29, humidity: 60, windSpeed: 9 },
  { city: "Kolkata", temp: 31, humidity: 68, windSpeed: 14 },
];

function WeatherApp() {
  const [city, setCity] = useState("");

  const [searchRes, setSearchRes] = useState([]);

  const handleSubmit = () => {
    const result = weatherData.filter(
      (w) => w.city.toLowerCase() === city.toLowerCase()
    );
    setSearchRes(result);
  };

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <input type="text" value={city} onInput={handleInput} />
      <button onClick={handleSubmit}>Get Weather</button>
      {searchRes.length > 0 &&
        searchRes.map((w, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div>City: {w.city}</div>
            <div>Temperature: {w.temp}°C</div>
            <div>Humidity: {w.humidity}%</div>
            <div>Wind Speed: {w.windSpeed} km/h</div>
          </div>
        ))}
    </div>
  );
}

function Tiles({ letter, setOutput }) {
  const handleClick = () => {
    setOutput((prev) => [...prev, letter]);
  };

  return (
    <button
      style={{
        ...styles.button,
        minWidth: "40px",
        padding: "10px 15px",
        fontSize: "16px",
        margin: "3px",
      }}
      onClick={handleClick}
      title={`Letter ${letter}`}
    >
      {letter}
    </button>
  );
}

export default function LandingPage() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  // Counter Component
  const CounterApp = ({ count, setCount }) => (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Counter: {count}</h3>
      <div>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button style={styles.button} onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );

  const ChangeBg = ({ color, setColor }) => (
    <select
      style={{
        ...styles.input,
        backgroundColor: "#fff",
        color: "#000",
        padding: "5px 10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
      value={color || "none"} // controlled value
      onChange={(e) => setColor(e.target.value)}
    >
      <option value="white">Select Background</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
    </select>
  );

  // Todo App Component
  const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    const addTodo = () => {
      if (!newTodo.trim()) return;
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    };

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    const toggleComplete = (id) =>
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    const startEdit = (id, text) => {
      setEditingId(id);
      setEditingText(text);
    };
    const saveEdit = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editingText } : todo
        )
      );
      setEditingId(null);
      setEditingText("");
    };

    return (
      <div>
        <h3 style={styles.title}>Todo List</h3>
        <input
          style={styles.input}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a task..."
        />
        <button style={styles.button} onClick={addTodo}>
          Add
        </button>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} style={{ margin: "10px 0" }}>
              {editingId === todo.id ? (
                <>
                  <input
                    style={styles.input}
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button
                    style={styles.button}
                    onClick={() => saveEdit(todo.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleComplete(todo.id)}
                  >
                    {todo.text}
                  </span>
                  <button
                    style={styles.button}
                    onClick={() => startEdit(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.button}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Searching App Component
  const SearchingApp = () => {
    const [content, setContent] = useState("");
    const DisplaySearchRes = ({ content }) => {
      const searchedData = myJsonData.filter((s) =>
        Object.values(s).some((val) =>
          Array.isArray(val)
            ? val.some((item) =>
                item.toLowerCase().includes(content.toLowerCase())
              )
            : val.toString().toLowerCase().includes(content.toLowerCase())
        )
      );
      return (
        <ul>
          {searchedData.length > 0 ? (
            searchedData.map((s) => (
              <li key={s.id}>
                <strong>{s.name}</strong>
                <ul>
                  {s.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      );
    };

    return (
      <div>
        <input
          style={styles.input}
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Search here..."
        />
        {content && <DisplaySearchRes content={content} />}
      </div>
    );
  };

  // SignUp Form Component
  const SignUpForm = () => {
    const [signupData, setSignupData] = useState({
      firstName: "",
      lastName: "",
      DOB: "",
      gender: "",
      email: "",
      password: "",
    });
    const [showResult, setShowResult] = useState({});
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setShowResult(signupData);
      alert("Form Submitted");
    };
    const handleOnChangeData = (e) => {
      const { name, value } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          {["firstName", "lastName", "DOB", "email", "password"].map(
            (field) => (
              <div key={field} style={{ marginBottom: "10px" }}>
                <label>{field.replace(/^\w/, (c) => c.toUpperCase())}: </label>
                <input
                  style={styles.input}
                  type={
                    field === "DOB"
                      ? "date"
                      : field === "email"
                      ? "email"
                      : "text"
                  }
                  name={field}
                  value={signupData[field]}
                  onChange={handleOnChangeData}
                  placeholder={`Enter ${field}`}
                />
              </div>
            )
          )}
          <div style={{ marginBottom: "10px" }}>
            <label>Gender: </label>
            <select
              style={styles.input}
              name="gender"
              value={signupData.gender}
              onChange={handleOnChangeData}
            >
              <option value="">Select One</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>
        {showResult && <pre>{JSON.stringify(showResult, null, 2)}</pre>}
      </div>
    );
  };

  // StopWatch Component
  const StopWatch = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
      let timer;
      if (isStarted)
        timer = setInterval(() => setTime((prev) => prev + 1), 1000);
      return () => clearInterval(timer);
    }, [isStarted]);
    return (
      <div>
        <h3 style={styles.title}>Stopwatch</h3>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>{time} sec</p>
        <div>
          <button style={styles.button} onClick={() => setIsStarted(true)}>
            Start
          </button>
          <button style={styles.button} onClick={() => setIsStarted(false)}>
            Stop
          </button>
          <button
            style={styles.button}
            onClick={() => {
              setIsStarted(false);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  };

  let tiles = [];

  for (let i = 65; i <= 90; i++) {
    tiles.push(String.fromCharCode(i));
  }

  const [letter, setLetter] = useState("");
  const [output, setOutput] = useState([]);

  return (
    <>
      <div className="landing-page">
        <Container className="text-center">
          <h1 className="welcome-title">Welcome to React Learning Hub</h1>
          <p className="welcome-text">
            Master React concepts step by step and build amazing applications.
          </p>
          <Link to="/basic">
            <Button variant="primary">Get Started</Button>
          </Link>
        </Container>
      </div>
      <div>
        {/* Full-width container for all components */}
        <div
          className="container-fluid"
          style={{ padding: "40px 20px", backgroundColor: color }}
        >
          <div style={{ ...styles.main, background: color }}>
            <div style={styles.flexcard}>
              <CounterApp count={count} setCount={setCount} />
            </div>
            <div style={styles.flexcard}>
              <h3 style={styles.title}>Change Background</h3>
              <ChangeBg color={color} setColor={setColor} />
            </div>
            <div style={styles.flexcard}>
              <TodoApp />
            </div>
            <div style={styles.flexcard}>
              <SearchingApp />
            </div>
            <div style={styles.flexcard}>
              <SignUpForm />
            </div>
            <div style={styles.flexcard}>
              <StopWatch />
            </div>
            <div style={styles.flexcard}>
              <h1 style={styles.title}> Keyboard Tiles </h1>
              <div style={styles.tiles}>
                {tiles.map((t, index) => (
                  <Tiles
                    key={index}
                    letter={t}
                    letters={letter}
                    setLetter={setLetter}
                    setOutput={setOutput}
                    output={output}
                  />
                ))}
              </div>
              <div style={styles.output}>
                {output.length > 0
                  ? `You clicked: ${output.join("")}`
                  : "Click some tiles!"}
              </div>
            </div>
          </div>

          <div style={styles.flexcard}>
            <h1 style={styles.title}>Weather App</h1>
            <WeatherApp />
          </div>
        </div>
      </div>
    </>
  );
}
