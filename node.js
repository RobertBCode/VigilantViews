const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.post('/api/submit', async (req, res) => {
    const { username, platform } = req.body;
    let apiUrl;
    if (platform === 'twitch') {
        apiUrl = https://api.twitch.tv/helix/streams?user_login=${username};
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Client-ID': '<YOUR_TWITCH_CLIENT_ID>',
                'Authorization': Bearer <YOUR_ACCESS_TOKEN>
            }
        });
        const data = await response.json();
        res.json(data);
    } else if (platform === 'kick') {
        // Add your implementation for Kick
        apiUrl = https://api.kick.com/v1/streams/${username}; // Placeholder
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } else {
        res.status(400).json({ error: 'Invalid platform specified' });
    }
});
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});
https://api.twitch.tv/helix/streams?user_login=${username}Bearer <YOUR_ACCESS_TOKEN>https://api.kick.com/v1/streams/${username}Server is running on port ${PORT}
