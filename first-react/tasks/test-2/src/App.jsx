import "./App.css";
// import Tasks from "./Tasks";

const taskList = [
  { id: 1, title: "Learn React basics", completed: true },
  { id: 2, title: "Practice JSX", completed: true },
  { id: 3, title: "Understand conditional rendering", completed: false },
];

const completedCount = taskList.reduce(
  (count, task) => (task.completed ? count + 1 : count),
  0
);

console.log(completedCount);
console.log(taskList.length);

function App() {
  return (
    <div>
      {taskList.length === 0 ? (
        <p>No Tasks for today</p>
      ) : completedCount === taskList.length ? (
        <p>Keep up</p>
      ) : (
        <ul>
          {taskList
            .map(task => <li key={task.id}>{task.title}</li>)
            .filter(completed)}
        </ul>
      )}
    </div>
  );
}

export default App;
