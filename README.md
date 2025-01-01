# New_Records_Hub
 A better way to handle all the data that was in my Google Sheets

# Prerequisites

### Extensions
In order to use the `fetch` call, this app needs to be running ona  live server. To accomplish this in a free, local context, I use the VS Code extension *Live Server* by Ritwick Dey (`ritwickdey.LiveServer`)

In order for your browser to allow the Steam Web API to respond with usable data, certain security rules need to be changed.
I have seen methods of using a third-party service to do this properly, but as this app is only for my personal use, I simply use this Chrome extension:
https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1

### Credentials
Not included in this app are the necessary credentials for querying. You will need
- The Steam ID of the profile that you wish to query (which can be found under "Account Details" in the upper righthand dropdown of the Steam app)
- A Steam API key, which can be obtained at the link under *Other Resources*

These two pieces of info need to be placed in a `credentials.json` and formatted as follows:
```
{"apiKey": "YOUR API KEY HERE",
"steamId": "YOUR STEAM ID HERE"}
```

# Other Resources
https://steamcommunity.com/dev