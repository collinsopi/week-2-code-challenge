import React, { useState } from "react";
import { updateGoal } from "../utils/api";

export default function EditGoalForm({ goal, setGoals, closeEdit }) {
    const [formData, setFormData] = useState({ ...goal });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateGoal(goal.id, formData).then((updatedGoal) => {
        setGoals((prev) =>
            prev.map((g) => (g.id === updatedGoal.id ? updatedGoal : g))
        );
        closeEdit();
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form">
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="targetAmount" value={formData.targetAmount} onChange={handleChange} />
        <input name="category" value={formData.category} onChange={handleChange} />
        <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
        <button type="submit" className="btn btn-save">Save Changes</button>
        <button onClick={closeEdit} className="btn btn-cancel">Cancel</button>
        </form>
    );
}
