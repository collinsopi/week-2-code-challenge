Smart Goal Planner

A simple and powerful fintech app that helps users manage multiple savings goals, track progress, and make deposits — all backed by a local RESTful API using `json-server`.


Features

Create, Read, Update, Delete (CRUD) financial goals
Add deposits toward each goal
Visual progress tracking with bars
Warning alerts for approaching or missed deadlines
Overview dashboard with useful savings insights
Responsive card layout for goals


Tech Stack

- Frontend: React, Tailwind CSS, JavaScript (ES6+)
- Backend: JSON Server (`db.json` as a local REST API)
- Styling: Tailwind + custom CSS modules
- Tooling: Vite (for fast dev server)


The app will be running at:
Frontend → http://localhost:5174
Backend API → http://localhost:3000/goals


Project structure

smart-goal-planner
├── public
├── src
│   ├── components
│   │   ├── GoalItem.jsx
│   │   ├── GoalForm.jsx
│   │   ├── GoalCard.jsx
│   │   ├── DepositForm.jsx
│   │   ├── Overview.jsx
    |   ├── EditGoalForm.jsx
    |   ├── Header.jsx
    |   ├── Overview.jsx
    |
    ├── pages
    |    ├── Dashboard.jsx
    |
│   ├── styles
│   │   ├── App.css
│   │   ├── GoalItem.css
│   │   ├── Overview.css
    |   ├── Dashboard.css
    |   ├── DepositForm.css
    |   ├── GoalCard.css
    |   ├── GoalList.css
    |   ├── Header.css
    |
    |
    |
    |
│   ├── utils
│   │   └── api.js
│   └── App.jsx
    ├── main.jsx
    ├── index.html
├── db.json
├── tailwind.config.js
└── README.md



Future Improvements

User authentication
Mobile-first enhancements
Notifications/reminders

Author
Collins Opiayo
Fintech & Full Stack Developer

License
This project is licensed under the MIT License.