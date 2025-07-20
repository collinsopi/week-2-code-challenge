const BASE_URL = "http://localhost:3000/goals";

export const fetchGoals = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createGoal = async (goal) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return res.json();
};

export async function updateGoal(id, updatedData) {
  const res = await fetch(`http://localhost:3000/goals/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

export const deleteGoal = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
