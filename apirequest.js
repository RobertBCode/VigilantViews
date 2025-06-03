document.getElementById('viewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const platform = document.getElementById('platform').value;
    const endpoint = platform === 'twitch' 
        ? https://api.twitch.tv/helix/streams?user_login=${username} 
        : https://api.kick.com/v1/streams/${username}; // Placeholder for Kick API
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Client-ID': '<YOUR_TWITCH_CLIENT_ID>',
            'Authorization': Bearer <YOUR_ACCESS_TOKEN>
        }
    })
    .then(response => response.json())
    .then(data => {
        // Process and analyze the response data for view counts.
        console.log(data);
        document.getElementById('result').innerText = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
});
https://api.twitch.tv/helix/streams?user_login=${username}https://api.kick.com/v1/streams/${username}Bearer <YOUR_ACCESS_TOKEN>
