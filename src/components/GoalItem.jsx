import React, { useState } from "react";
import GoalCard from "./GoalCard";
import DepositForm from "./DepositForm";
import EditGoalForm from "./EditGoalForm";
import "../styles/GoalItem.css";

export default function GoalItem({ goal, setGoals }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="goal-item">
        {isEditing ? (
            <EditGoalForm goal={goal} setGoals={setGoals} closeEdit={() => setIsEditing(false)} />
        ) : (
            <>
            <GoalCard goal={goal} />
            <DepositForm goal={goal} setGoals={setGoals} />
            <button onClick={() => setIsEditing(true)} className="btn btn-edit">Edit</button>
            </>
        )}
        </div>
    );
}
