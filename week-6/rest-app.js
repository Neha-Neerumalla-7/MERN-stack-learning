const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    { id: 1, title: 'Learn Express' },
    { id: 2, title: 'Master REST APIs' }
];

// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT update a task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task successfully updated",
            task: task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// DELETE a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: "Task Deleted",
        remainingTasks: tasks
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
});