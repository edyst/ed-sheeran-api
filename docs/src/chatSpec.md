---
title:  'Edyst: Ed Sheeran (Chat Service) API Spec'
author:
- Abhinandan (<abhi@edyst.com>)
- Pranay (<pranay@edyst.com>)
geometry: margin=1in
output: pdf_document
...

# Users Resource
 
## `GET "/users/:userId/"`
```json
{
    "id": "1",
    "username": "suprememoocow",
    "displayName": "Andrew Newdigate",
    "url": "/suprememoocow",
    "avatarUrlSmall": "https://avatars.githubusercontent.com/u/594566?",
    "avatarUrlMedium": "https://avatars.githubusercontent.com/u/594566?"
}
```

## `GET "/user/:userId/channels/:channelId/unreadItems"`
```json
{
  "messages": [
    "560ae5f495756f1402bc841d",
    "560aeef6f4b61c106fb2a9f3",
    "560aef2b552ed7913279df52"
  ],
  "mentions": [
    "560b167a967c1bad7852bc57"
  ]
}
```

## `POST "/user/:userId/channels/:channelId/unreadItems"`
```json
{
  "messages": [
    "560ae5f495756f1402bc841d",
    "560aeef6f4b61c106fb2a9f3",
    "560aef2b552ed7913279df52"
  ]
}
```

## `GET "/user/:userId/channels/"`
```json
[ 
  ...listOfChannelObjects 
]
```


# Message Resource

## `GET "/channels/:channelId/messages/:messageId/"`
```json
{
  "id": "53316dc47bfc1a000000000f",
  "text": "Hi @suprememoocow !",
  "html": "<span>Hi @suprememoocow !</span>",
  "sent": "2014-03-25T11:51:32.289Z",
  "editedAt": "2014-03-25T12:13:02.985Z",
  "fromUser": { ...userObject },
  "unread": false,
  "readBy": 0,
  "mentions": [{
    "screenName": "suprememoocow",
    "userId": "53307831c3599d1de448e19a"
  }]
}
```

## `GET "/channels/:channelId/messages/"`
```json
[ 
  ...messageObjects 
]
```

### Additional URL Params:

- `limit=50`
- `beforeId=<messageId>`
- `afterId=<messageId>`
- `aroundId=<messageId>`
- `skip=100`

usage:

```
GET "/channels/:channelId/messages/?limit=50&beforeId=20dd4df4f22f2f4a&skip=100"
```

# Channels (Rooms)
 
## `GET "/channels/:channelID/"`
```json
{
        "id": "23498ab8ba824c",
        "name": "JavaScript",
        "uri": "gitterHQ",
        "type": "channel",
        "favorite": false,
        "description": "A channel to up your JavaScripting Game",
        "users": [],
        "unreadItems": 0,
        "mentions": 0,
        "url": "/suprememoocow",
        "lastAccessTime": "2014-03-24T18:22:28.105Z",
}
```


# Teams (Groups)

## `GET "/teams/:teamId/"`
```json
{
    "id": "57542c12c43b8c601976fa66",
    "name": "gitterHQ",
    "uri": "gitterHQ",
    "avatarUrl": "http://gitter.im/avatars/i/577ef7e4e897e2a459b1b881",
    "users": []
}
```

## `GET "/teams/:teamId/channels/"`
```json
[ 
  ...listOfChannelObjects 
]
```

# Authentication [TODO]


#  Streaming endpoints

- `/user/:userId/channels/`

- `/user/:userId/channels/:channelId/unreadItems/`

- `/user/:userId/`

- `/channels/:channelId/`

- `/channels/:channelId/messages/`

- `/channels/:channelId/users/`

- `/channels/:channelId/events/`

- `/channels/:channelId/messages/:messageId/readBy/`



