<template>
  <div class="hello">
    <h1>View contact details</h1>
    <div class="contact-row" v-for="item in customerContacts" :key="item">
      <div class="contact-item">{{ "Avathar" }}</div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewContacts",
  props: {
    customerContacts: Array,
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
  border: solid 1pt #ff3860;
  border-radius: 8px;
  margin: 20px;
}

@media (max-width: 800px) {
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
  font-size: 25px;
}
</style>
