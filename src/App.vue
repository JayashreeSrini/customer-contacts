<template>
  <img alt="Vue logo" src="./assets/customer-contacts.jpg" />
  <ViewContacts :customer-contacts="customerContacts" />
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import ViewContacts from "./components/ViewContacts.vue";

export default {
  name: "App",
  components: {
    ViewContacts,
  },
  data() {
    return {
      customerContacts: [],
    };
  },
  mounted() {
    // Get a Firestore instance
    const db = firebase
      .initializeApp({ projectId: "customer-contact-vue" })
      .firestore();
    db.collection("users")
      .get()
      .then((snap) => {
        const contacts = [];
        snap.forEach((doc) => {
          contacts.push(doc.data());
        });
        console.log(contacts);
        this.customerContacts = contacts;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
