import React from "react";
import dayjs from "dayjs";
import "../styles/GoalCard.css";

export default function GoalCard({ goal }) {
  const progress = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100);
    const isComplete = goal.savedAmount >= goal.targetAmount;
    const deadline = dayjs(goal.deadline);
    const now = dayjs();
    const daysLeft = deadline.diff(now, "day");
    const isOverdue = !isComplete && now.isAfter(deadline);
    const isWarning = !isComplete && daysLeft <= 30 && daysLeft >= 0;

    return (
        <div className="goal-card">
        <h3 className="goal-title">{goal.name}</h3>
        <p className="goal-category">Category: {goal.category}</p>
        <div className="progress-bar-bg">
            <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
            ></div>
        </div>
        <p className="goal-amount">
            Saved: <span className="font-medium">${goal.savedAmount.toLocaleString()}</span> / ${goal.targetAmount.toLocaleString()}
        </p>
        <p className="goal-deadline">Deadline: {goal.deadline}</p>
        {isWarning && <p className="goal-warning">⚠️ Less than 30 days left!</p>}
        {isOverdue && <p className="goal-overdue">❌ Goal overdue!</p>}
        {isComplete && <p className="goal-complete">✅ Goal complete!</p>}
        </div>
    );
}
