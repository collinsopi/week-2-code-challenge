import React from "react";
import dayjs from "dayjs";
import "../styles/Overview.css";

export default function Overview({ goals }) {
    const totalGoals = goals.length;
    const totalSaved = goals.reduce((acc, goal) => acc + goal.savedAmount, 0);
    const goalsCompleted = goals.filter((goal) => goal.savedAmount >= goal.targetAmount).length;
    const now = dayjs();

    return (
        <div className="overview-container">
        <h2 className="overview-title">Overview</h2>
        <div className="overview-stats">
            <div className="stat-card">
            <h3>Total Goals</h3>
            <p>{totalGoals}</p>
            </div>
            <div className="stat-card">
            <h3>Total Saved</h3>
            <p>Ksh {totalSaved}</p>
            </div>
            <div className="stat-card">
            <h3>Goals Completed</h3>
            <p>{goalsCompleted}</p>
            </div>
        </div>

        <div className="overview-warnings">
            {goals.map((goal) => {
            const deadline = dayjs(goal.deadline);
            const daysLeft = deadline.diff(now, "day");
            const isOverdue = goal.savedAmount < goal.targetAmount && daysLeft < 0;
            const isWarning = daysLeft <= 30 && daysLeft >= 0 && goal.savedAmount < goal.targetAmount;

            return (
                <div
                key={goal.id}
                className={`warning-card ${
                    isOverdue ? "overdue" : isWarning ? "warning" : "on-track"
                }`}
                >
                <p className="goal-name">{goal.name}</p>
                {isOverdue && <p className="overdue-text">⚠️ Overdue - Deadline was {deadline.format("MMM D, YYYY")}</p>}
                {isWarning && <p className="warning-text">⚠️ {daysLeft} days left to reach your goal</p>}
                {!isWarning && !isOverdue && <p className="on-track-text">⏳ {daysLeft} days left</p>}
                </div>
            );
            })}
        </div>
        </div>
    );
}
