<template>
  <div class="hello">
    <form id="signup-form" @submit.prevent="processForm">
      <div class="field-wrapper">
        <h1 className="is-size-2">Add contact details</h1>
        <br />
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="First Name"
              name="first_name"
              v-model="first_name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Last Name"
              name="last_name"
              v-model="last_name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Phone number"
              name="ph_number"
              v-model="ph_number"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Email"
              name="email"
              v-model="email"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Post code"
              name="post_cd"
              v-model="post_cd"
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="buttons">
        <button type="submit" class="button is-primary">Primary</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  name: "EditContacts",
  data() {
    return {
      customerContacts: [],
      first_name: "",
      last_name: "",
      ph_number: "",
      email: "",
      post_cd: "",
    };
  },
  methods: {
    processForm: function () {
      const db = !firebase.apps.length
        ? firebase
            .initializeApp({ projectId: "customer-contact-vue" })
            .firestore()
        : firebase.app().firestore();
      db.collection("users")
        .add({
          FirstName: this.first_name,
          LastName: this.last_name,
          ContactNumber: this.ph_number,
          Email: this.email,
          PostCd: this.post_cd,
        })
        .then((docRef) => {
          console.log("Document written with id", docRef.id);
          this.$router.push("/view-contacts");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.field-wrapper {
  width: 50%;
  text-align: start;
}
input {
  margin-bottom: 20px;
}
</style>
