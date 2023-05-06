<template>
    <h1>Login Page</h1>
    <form name="login-form">
    <div class="mb-3">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model="input.username" />
    </div>
    <div>
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="input.password" />
    </div>
    <button  type="submit" v-on:click.prevent="login()">
      Login
    </button>
  </form>
</template>

<script>
import {mapState} from "vuex";

export default({
    name: 'LoginPage',
    data() {
    return {
      input: {
        username: "",
        password: ""
      },
      output: "",
    }
  },
  computed: {
        ...mapState([
            'employee'
        ])
    },
    methods: {
    login() {
      //make sure username OR password are not empty
      if (this.input.username != "" || this.input.password != "") {
        console.log("hfhd");
         this.employee.forEach(element => {
           console.log("i m this",element.name);
           if(element.name == this.input.username && element.password == this.input.password){
            console.log("i mtched");
            this.$router.push({ name: 'HomePage' })
            return true;
           }
         });
      } else {
         alert("Please enter username and password");
      } 
    },
  }
})
</script>