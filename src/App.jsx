import React, { useState, useEffect } from "react";
import { fetchGoals } from "./utils/api";
import GoalItem from "./components/GoalItem";
import GoalForm from "./components/GoalForm";
import Overview from "./components/Overview";
import "./styles/App.css";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Smart Goal Planner</h1>
          <p className="app-subtitle">Track your financial goals and deposits</p>
        </header>

        <div className="app-controls">
          <button onClick={() => setShowForm(!showForm)} className="btn btn-toggle">
            {showForm ? "Close" : "Add New Goal"}
          </button>
        </div>

        {showForm && <GoalForm setGoals={setGoals} closeForm={() => setShowForm(false)} />}

        <div className="goal-grid">
          {goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} setGoals={setGoals} />
          ))}
        </div>
        <Overview goals={goals} />
      </div>
    </div>
  );
}
