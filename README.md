# nuxt-on-firebase-mac

This is written for reporting a bug.

> Firebase 7.8.1
> Nuxt 2.10.2
> Nuxt-i18n 6.3.0
> Firbase/Nuxt Plugins Bug

## Build Setup

1. set your project id on .firebaserc
(you can just use firebase init command, but you should chnage firebase.json values)
"hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "nuxtssr"
      }
    ]
  },

2. set your project api key and other information on .env
FIREBASE_APIKEY=APIKEY
FIREBASE_AUTHDOMAIN=PID.firebaseapp.com
FIREBASE_DATABASE_URL=https://PID.firebaseio.com
FIREBASE_STORAGE_BUCKET=gs://PID.appspot.com/
FIREBASE_PROJECTID=PID

3. yarn

4. yarn build:firebase

5. yarn start:firebase

## Result

It will be show the timeout error only on Dev emulator environment (firebase serve)

The reason I found.
1. src > plugins > firebase.js > //Fixme. app.router.replace(app.localePath({ name: 'index' }))
: This should replace the current route path.
: But it can't be triggered properly on the firebase emulator.

2. nuxt.config.js > // Fixme. '~/plugins/common_variables' is the last js plugins in the list
: Because firebase.js is not the last plugins in this list, the route process is broken,
: Just change the order firebase.js with common_variables like 

```
[
    '~/plugins/common_variables', // Fixme.
    '~/plugins/firebase',
],
```

: This will work properly


3. This problems is only happened in the emulator environment.
