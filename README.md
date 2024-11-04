<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <img src="https://github.com/user-attachments/assets/26d061f4-daf3-40a7-b014-633cea139d06" alt="X logo" width="200" height="200" />
    <h1>TWITTERYTBOTJS</h1>
    <p><strong>TWITTERYTBOTJS</strong> is a Node.js bot that automatically monitors specified YouTube channels for live streams. When any of the configured channels go live, the bot posts a tweet to your Twitter account announcing that the channel is now live. This project leverages the Twitter API (v2) and YouTube Data API.</p>
    <h2>Features</h2>
    <ul>
        <li>Automatically monitor multiple YouTube channels for live status.</li>
        <li>Send a tweet with a link when a YouTube channel goes live.</li>
        <li>Configurable API keys and rate-limited tweeting to prevent spamming.</li>
        <li>Built-in 24-hour rate limit to ensure compliance with Twitter's guidelines.</li>
    </ul>
    <h2>Requirements</h2>
    <ul>
        <li>Node.js (version 14 or higher recommended)</li>
        <li>A Twitter Developer Account for API keys</li>
        <li>A Google Developer Account for YouTube Data API access</li>
    </ul>
    <h2>Setup Instructions</h2>
    <h3>1. Clone the Repository</h3>
    <pre>git clone https://github.com/Riotcoke123/TWITTERYTBOTJS.git
cd TWITTERYTBOTJS</pre>
    <h3>2. Install Dependencies</h3>
    <p>Make sure to install the required packages:</p>
    <pre>npm install</pre>
    <h3>3. Configuration</h3>
    <p>Create a <code>config.json</code> file in the root directory and fill it with your API keys:</p>
    <pre>{
  "API_KEY": "your-twitter-api-key",
  "API_KEY_SECRET": "your-twitter-api-secret-key",
  "ACCESS_TOKEN": "your-twitter-access-token",
  "ACCESS_TOKEN_SECRET": "your-twitter-access-token-secret",
  "BEARER_TOKEN": "your-twitter-bearer-token",
  "YOUTUBE_API_KEY": "your-youtube-api-key",
  "CHANNEL_IDS": [
    "CHANNEL_ID",
    "CHANNEL_ID",
    "CHANNEL_ID"
  ]
}</pre>
    <h2>Run the Bot</h2>
    <pre>node your-script-file.js</pre>
    <h2>How it Works</h2>
    <p>The bot continuously monitors the specified YouTube channels using the YouTube Data API. If a channel goes live, the bot will post a tweet with a link to the live video. A simple rate-limiting system is implemented to ensure no more than 50 tweets are sent within 24 hours.</p>
    <h2>License</h2>
    <p>This project is licensed under the <strong>GNU General Public License</strong>. You can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>
    <p>For more details, see the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">LICENSE</a>.</p>
    <h2>Contributing</h2>
    <p>Feel free to open issues, submit pull requests, or contribute to this project. Contributions are welcome!</p>
    <h2>Troubleshooting</h2>
    <h3>Common Issues</h3>
    <ul>
        <li><strong>Invalid API Keys:</strong> Make sure that you have valid API keys in the <code>config.json</code>.</li>
        <li><strong>Rate Limits:</strong> If you reach the 50-tweet limit within 24 hours, the bot will pause tweeting until the period resets.</li>
        <li><strong>YouTube API Quota:</strong> Ensure your YouTube API quota isn't exhausted, as each request consumes quota units.</li>
    </ul>
    <h3>Logs</h3>
    <p>The bot will log errors and successful operations to the console. Check the terminal for any specific error messages if something goes wrong.</p>
    <h2>Additional Resources</h2>
    <ul>
        <li><a href="https://developer.twitter.com/">Twitter Developer Portal</a></li>
        <li><a href="https://developers.google.com/youtube/v3">YouTube Data API Documentation</a></li>
        <li><a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License</a></li>
    </ul>
</body>
</html>
