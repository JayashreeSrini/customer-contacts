<template>
  <div class="hello">
    <h1 className="is-size-2">View contact details</h1>
    <div class="contact-row" v-for="item in customerContacts" :key="item">
      <div class="contact-item">{{ "Avatar" }}</div>
      <div class="contact-item">
        <div class="contact-title">First Name</div>
        <div class="contact-data">{{ item.FirstName }}</div>
      </div>
      <div class="contact-item">
        <div class="contact-title">Last Name</div>
        <div class="contact-data">{{ item.LastName }}</div>
      </div>
      <div class="contact-item">
        <div class="contact-title">Phone Number</div>
        <div class="contact-data">{{ item.ContactNumber }}</div>
      </div>
      <div class="contact-item">
        <div class="contact-title">Email</div>
        <div class="contact-data">{{ item.Email }}</div>
      </div>
      <div class="contact-item">
        <div class="contact-title">Post code</div>
        <div class="contact-data">{{ item.PostCd }}</div>
      </div>
      <div class="contact-item button-wrapper">
        <button class="button is-success" @click.prevent="setContactItem(item)">
          <span>Edit</span>
        </button>
      </div>
      <div class="contact-item button-wrapper">
        <button
          class="button is-danger is-outlined"
          @click.prevent="deleteContact(item)"
        >
          <span>Delete</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: "ViewContacts",
  data() {
    return {
      customerContacts: [],
    };
  },
  methods: {
    setContactItem(item) {
      console.log(item);
      this.$router.push("/edit-contacts");
    },
    deleteContact(item) {
      firebase
        .app()
        .firestore()
        .collection("users")
        .doc(item.id)
        .delete()
        .then((docRef) => {
          console.log("deleted successfull", docRef);
          firebase
            .app()
            .firestore()
            .collection("users")
            .get()
            .then((snap) => {
              const contacts = [];
              snap.forEach((doc) => {
                contacts.push({ id: doc.id, ...doc.data() });
              });
              console.log(contacts);
              this.customerContacts = contacts;
            });
        });
    },
  },
  mounted() {
    // Get a Firestore instance
    const db = !firebase.apps.length
      ? firebase
          .initializeApp({ projectId: "customer-contact-vue" })
          .firestore()
      : firebase.app().firestore();
    db.collection("users")
      .get()
      .then((snap) => {
        const contacts = [];
        snap.forEach((doc) => {
          contacts.push({ id: doc.id, ...doc.data() });
        });
        console.log(contacts);
        this.customerContacts = contacts;
      });
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

.contact-row {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  border: solid 1pt #3273dc;
  border-radius: 8px;
  margin: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1000px) {
  .contact-row {
    flex-direction: column;
  }
}
.contact-item {
  padding: 10px;
  flex: 15%;
}

.contact-title {
  font-size: 14px;
  font-style: italic;
}
.contact-data {
  font-size: 20px;
}
</style>
