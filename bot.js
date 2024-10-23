const { TwitterApi } = require('twitter-api-v2');
const axios = require('axios');
const config = require('./config.json');

// Initialize Twitter client using API v2 with Bearer Token
const client = new TwitterApi({
  appKey: config.API_KEY,
  appSecret: config.API_KEY_SECRET,
  accessToken: config.ACCESS_TOKEN,
  accessSecret: config.ACCESS_TOKEN_SECRET,
  bearerToken: config.BEARER_TOKEN, // Added Bearer Token
});

// In-memory tracking for tweet count
let tweetCount = 0;
let firstTweetTime = null;

// Function to post a tweet with rate limiting
async function postTweet(text) {
  const now = new Date();

  // Reset count if more than 24 hours have passed
  if (!firstTweetTime || (now - firstTweetTime) > 24 * 60 * 60 * 1000) {
    tweetCount = 0; // Reset the count
    firstTweetTime = now; // Update the first tweet time
  }

  // Check if daily limit is reached
  if (tweetCount >= 50) {
    console.error('Daily tweet limit reached (50). Cannot post more tweets until 24 hours have passed.');
    return;
  }

  try {
    const response = await client.v2.tweet(text);
    console.log('Tweet posted:', response.data);

    // Increment tweet count
    tweetCount += 1;

  } catch (error) {
    console.error('Error posting tweet:', error);
  }
}

// Function to check if any of the YouTube channels are live
async function checkYouTubeLiveStatus() {
  for (const channelId of config.CHANNEL_IDS) {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          channelId: channelId,
          eventType: 'live',
          type: 'video',
          key: config.YOUTUBE_API_KEY,
        },
      });

      // Check if any live broadcasts were found
      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        const tweetText = `🎥 A streamer from channel ${channelId} is now live! Watch here: https://www.youtube.com/watch?v=${videoId}`;
        await postTweet(tweetText);
      }
    } catch (error) {
      console.error(`Error checking YouTube live status for channel ${channelId}:`, error);
    }
  }
}

// Function to periodically check live status
async function monitorLiveStatus() {
  setInterval(checkYouTubeLiveStatus, 60000); // Check every minute
}

// Start monitoring
monitorLiveStatus();
