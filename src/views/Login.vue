<template>
  <div class="home">
    <div id="firebaseui-auth-container" style="margin-top:200px;"></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
// @ is an alias to /src


export default {
  name: 'Login',
    mounted() {
    let uiConfig = {
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          this.$store.dispatch('fetchUserProfile', authResult)
          this.$router.push({path:'/'})
        return true
    }
  }
    };
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
  },
}
</script>

