import React from "react";
import GoalList from "./GoalList";
import "../styles/Dashboard.css";

export default function Dashboard({ goals, setGoals }) {
  // Example summary data (replace with real logic later)
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter((g) => g.savedAmount >= g.targetAmount).length;
  const averageProgress =
    goals.length > 0
      ? Math.round(
          goals.reduce((sum, g) => sum + (g.savedAmount / g.targetAmount) * 100, 0) /
            goals.length
        )
      : 0;

  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        <div className="card">
          <h3>Total Goals</h3>
          <p className="value">{totalGoals}</p>
          <p className="label">Active savings goals</p>
        </div>
        <div className="card">
          <h3>Total Saved</h3>
          <p className="value green">${totalSaved.toLocaleString()}</p>
          <p className="label">Across all goals</p>
        </div>
        <div className="card">
          <h3>Completed Goals</h3>
          <p className="value">{completedGoals}</p>
          <p className="label">No goals yet</p>
        </div>
        <div className="card">
          <h3>Average Progress</h3>
          <p className="value">{averageProgress}%</p>
          <p className="label">Overall progress</p>
        </div>
      </div>

      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  );
}
