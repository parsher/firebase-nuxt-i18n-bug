import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function ({ store, app, route }) {

  if (!firebase.apps.length) {

    firebase.initializeApp({
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      projectId: process.env.FIREBASE_PROJECTID,
    })

    const auth = firebase.auth;

    auth().onAuthStateChanged(async (user) => {
      if (user) {
      } else {
        // Fixme.
        app.router.replace(app.localePath({ name: 'index' }))
      }
    })

    Vue.prototype.$auth = auth
    Vue.prototype.$firebase = firebase
    Vue.prototype.$signOut = async function () {
      await auth().signOut()
    }
  }
}