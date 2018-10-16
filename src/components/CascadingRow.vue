<template>
  <div class="row" v-show="checkShow" :style="{'font-size': fontSize + 'px', 'padding-bottom': '10px'}">
    <span class="white--text"><slot></slot></span>
    <span v-for="(part, index) in parts">
      <span v-if="part.type == String">
        <span v-if="part.text" class="white--text subheading">
          {{part.text}}
        </span>
        <input v-model="inputs[0]" :style="{'width': part.width ? part.width + 'px' : '300px'}" v-else type="tel" :maxlength="part.maxLength" color="red">
      </span>
      <span v-else-if="part.type == Number">
        <input v-model="inputs[index]" :style="{'width': part.width ? part.width + 'px' : '100px'}" type="tel" :maxlength="part.maxLength" color="red" @keypress="onlyNumber">
        <span v-if="index < (parts.length - 1)" class="white--text heading"><b> - </b></span>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    modelKey: String,
    dependant: {
      type: Boolean,
      default: false
    },
    model: Object,
    fontSize: {
      type: Number,
      default: 35
    },
    name: String,
    parts: Array
  },
  data() {
    return {
      inputs: [

      ]
    }
  },
  computed: {
    finalInput: function() {
      var str = ''
      for (let input of this.inputs) {
        if (input) str += input
      }
      return str
    },
    checkShow: function() {
      if ((this.dependant) && (Object.keys(this.model)[Object.keys(this.model).indexOf(this.modelKey.toLowerCase()) - 1])) {
        return this.model[Object.keys(this.model)[Object.keys(this.model).indexOf(this.modelKey.toLowerCase()) - 1]]
      } else {
        return true
      }
    }
  },
  mounted: function() {
    if (this.parts) {
      for (var i = 0; i < this.parts.length; i++) {
        this.inputs[i] = ''
      }
    }
  },
  watch: {
    finalInput: function() {
      var accepted = true
      for (var i = 0; i < this.inputs.length; i++) {
        var input = this.inputs[i]
        if (this.parts[i].requires && (input.length < this.parts[i].requires)) {
           accepted = false
        }
      }
      if (accepted) {
        this.model[this.modelKey.toLowerCase()] = this.finalInput
      }
    },
  },
  methods: {
    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        $event.preventDefault();
      }
    }
  }
};
</script>
<style lang="css" scoped>
.row {
  animation: fadeIn 1s cubic-bezier(0.25, 0.8, 0.5, 1) both;
}

.white--text {
  color: #ffffff;
}

.subheading {
  font-weight: bold;
}

input {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    color: rgb(244, 67, 54);
    height: 57px;
    text-decoration: none solid rgb(244, 67, 54);
    text-size-adjust: 100%;
    column-rule-color: rgb(244, 67, 54);
    perspective-origin: 50px 28.5px;
    transmodel-origin: 50px 28.5px;
    background: rgb(255, 255, 255) none no-repeat scroll 0% 0% / auto padding-box border-box;
    border: 0px none rgb(244, 67, 54);
    border-radius: 4px 4px 4px 4px;
    font: normal normal 400 normal 38px / 57px Roboto, sans-serif;
    outline: rgb(244, 67, 54) none 0px;
    padding: 0px 0px 0px 5px;
}


input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>
