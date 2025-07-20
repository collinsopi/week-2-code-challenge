import React, { useState } from "react";
import { updateGoal, deleteGoal } from "../utils/api";
import "../styles/DepositForm.css";

export default function DepositForm({ goal, setGoals }) {
    const [deposit, setDeposit] = useState("");

    const handleDeposit = async () => {
        const newAmount = goal.savedAmount + Number(deposit);
        const updated = await updateGoal(goal.id, { savedAmount: newAmount });
        setGoals((prev) => prev.map((g) => (g.id === goal.id ? updated : g)));
        setDeposit("");
    };

    const handleDelete = async () => {
        await deleteGoal(goal.id);
        setGoals((prev) => prev.filter((g) => g.id !== goal.id));
    };

    return (
        <div className="deposit-form">
        <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className="deposit-input"
            placeholder="Deposit"
        />
        <button onClick={handleDeposit} className="btn btn-deposit">
            Add
        </button>
        <button onClick={handleDelete} className="btn btn-delete">
            Delete
        </button>
        </div>
    );
}