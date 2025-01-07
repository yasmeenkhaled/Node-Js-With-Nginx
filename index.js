const express = require('express');
const path = require('path');
const app = express();
// Get the application name from the environment variable
const appName = process.env.APP_NAME || 'Node App';
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '')));
// Route to serve the index page
app.get('/', (_req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Route to serve the about page
app.get('/about', (_req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
// Start the server on the specified port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
 console.log(`${appName} is running on http://localhost:${PORT}`);
});