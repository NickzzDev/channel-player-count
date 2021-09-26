client.on('ready', () => {
  setInterval(() => {
    const serverOne = client.guilds.cache.get('server_id');
    const channelOne = serverOne.channels.cache.get('channel_id');
    channelOne.setName(`📊｜Members: ` + serverOne.memberCount, 'AutoMemberCount')
  }, 10000);
})
// Make sure you change the Server and Channel ID!!
