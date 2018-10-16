<template>
  <div id="app">
    <div id="main">
      <CascadingRow :font_size="25">
        Hi there 👋 <br> This is the sign up demo. Try it out!
      </CascadingRow>
      <CascadingRow v-for="(part, key, index) in parts"
        :model_key="key" :dependant="true" :model="form"
        :parts="part">{{key}}:
      </CascadingRow>
      <CascadingRow v-show="formCorrect">
        <button>submit</button>
        <button style="margin-left: 10px;" href="https://github.com/98mprice/vue-cascading-signup">github</button>
      </CascadingRow>
      {{form}}
    </div>
  </div>
</template>

<script>
import CascadingRow from './components/CascadingRow.vue'

export default {
  name: 'app',
  components: {
    CascadingRow
  },
  data() {
    return {
      previous: null,
      form: {
        'name': '',
        'cell phone': '',
        'email address': ''
      },
      parts: {
        'Name': [
          {
            type: String
          }
        ],
        'Cell Phone': [
          {
            text: '+27',
            type: String
          },
          {
            requires: 3,
            maxLength: 3,
            type: Number
          },
          {
            requires: 4,
            maxLength: 4,
            type: Number
          }
        ],
        'Email Address': [
          {
            requires: 5,
            type: String,
            width: 400
          }
        ]
      }
    }
  },
  computed: {
    formCorrect: function() {
      var accepted = true
      for (var key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          if (!this.form[key]) accepted = false
        }
      }
      return accepted
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: red;
  padding: 25px;
  height: 100%;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

#main {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

button {
  color: #ffffff;
  background-color: transparent;
  border-radius: 4px 4px 4px 4px;
  outline:0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 35px;
  font-family: 'Ubuntu', sans-serif;
}
</style>
