const express = require('express');

const app = express();
const PORT = 3000;

// Dynamic route: /user/:id
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    res.send(
        `<h1>User Profile</h1>
         <p>You are viewing the profile for the User Id <strong>${userId}</strong></p>`
    );
});

// Dynamic route: /flights/:from/:to
app.get('/flights/:from/:to', (req, res) => {
    const { from, to } = req.params;

    res.send(
        `Searching for the flights from <strong>${from}</strong> to <strong>${to}</strong>`
    );
});

// Query parameters: /search?category=books&sort=price
app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search results",
        filteringBy: category || "None",
        sortingBy: sort || "None"
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic Server is successfully running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the Server');
});