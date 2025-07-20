import React, { useState } from "react";
import { createGoal } from "../utils/api";
import { v4 as uuidv4 } from "uuid";
import "../styles/GoalForm.css";

export default function GoalForm({ setGoals, closeForm }) {
    const [formData, setFormData] = useState({
        name: "",
        targetAmount: "",
        category: "",
        deadline: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGoal = {
        id: uuidv4(),
        name: formData.name,
        targetAmount: Number(formData.targetAmount),
        savedAmount: 0,
        category: formData.category,
        deadline: formData.deadline,
        createdAt: new Date().toISOString().split("T")[0],
        };
        const created = await createGoal(newGoal);
        setGoals((prev) => [...prev, created]);
        closeForm();
    };

    return (
        <div className="goal-form">
        <h2 className="goal-form-title">Add New Goal</h2>
        <form onSubmit={handleSubmit} className="goal-form-fields">
            <input
            name="name"
            placeholder="Goal Name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
            type="number"
            name="targetAmount"
            placeholder="Target Amount"
            value={formData.targetAmount}
            onChange={handleChange}
            required
            />
            <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            />
            <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            />
            <div className="goal-form-actions">
            <button type="submit" className="btn btn-save">Save Goal</button>
            <button onClick={closeForm} type="button" className="btn btn-cancel">Cancel</button>
            </div>
        </form>
        </div>
    );
}
