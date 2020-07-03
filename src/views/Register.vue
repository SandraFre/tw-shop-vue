<template>
  <form class="container container-main" v-on:submit.prevent="login" method="post">
    <h1 class="text-center">Register Form</h1>
    <div class="row">
      <input-group
        v-for="(input, i) in inputs"
        :key="i"
        :name="input.name"
        :type="input.type"
        :title="input.title"
        :placeholder="input.placeholder"
        :initValue="input.initValue"
        :required="input.required"
        :classList="input.classList"
        :rules="input.rules"
        v-on:input-state-changed="checkInputs"
      ></input-group>
    </div>
    <div class="text-center">
      <input type="submit" class="btn btn-primary" value="Submit" v-bind:disabled="!enableSubmit" />
    </div>
  </form>
</template>

<script>
import InputGroup from "../validation/InputGroup";

export default {
  name: "register-form",
  inputsValidState: [],
  components: {
    InputGroup
  },
  data() {
    return {
      enableSubmit: false,
      inputs: [
        {
          title: "Login",
          name: "login",
          placeholder: "",
          initValue: "",
          type: "text",
          required: true,
          classList: ["mb-3", "col-12", "col-md-6", "offset-md-3"],
          rules: [
            {
              rule: (input, min) => input.length >= min,
              msg: min => `Input must have atleast ${min} characters.`,
              params: [4]
            }
          ]
        },
        {
          title: "Email",
          name: "email",
          placeholder: "",
          initValue: "",
          type: "email",
          required: true,
          classList: ["mb-3", "col-12", "col-md-6", "offset-md-3"],
          rules: [
            {
              rule: input => {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(input);
              },
              msg: () => `Input must be an email`
            }
          ]
        },
        {
          title: "Password",
          name: "password",
          placeholder: "",
          initValue: "",
          type: "password",
          required: true,
          classList: ["mb-3", "col-12", "col-md-6", "offset-md-3"],
          rules: [
            {
              rule: (input, min) => input.length >= min,
              msg: min => `Input must have atleast ${min} characters.`,
              params: [4]
            },
            {
              rule: (input, max) => input.length <= max,
              msg: max => `Input must have atleast ${max} characters.`,
              params: [16]
            },
            {
              rule: (input) => /[A-Z]+/.test(input),
              msg: max => `Input must have atleast one capital letter.`,
            },
            {
              rule: (input) => /\d+/.test(input),
              msg: max => `Input must have atleast one numeric value.`,
            }
          ]
        },
        {
          title: "Repeat password",
          name: "rep-password",
          placeholder: "",
          initValue: "",
          type: "password",
          required: true,
          classList: ["mb-3", "col-12", "col-md-6", "offset-md-3"],
          rules: [
            {
              rule: input =>
                input ==
                this.inputs[this.inputs.findIndex(x => x.name == "password")]
                  .initValue,
              msg: () => `Passwords do not match`
            }
          ]
        }
      ]
    };
  },
  methods: {
    login(e) {
      if (this.enableSubmit) {
        const loginVal = e.target[0].value;
        const passVal = e.target[1].value;
        console.log({ loginVal });
        console.log({ passVal });
      }
    },
    checkInputs(inputState) {
      const ii = this.inputs.findIndex(el => el.name == inputState.name);
      this.inputs[ii].valid = inputState.valid;
      this.inputs[ii].initValue = inputState.initValue;
      this.enableSubmit =
        this.inputs.filter(el => el.valid).length == this.inputs.length;
    }
  }
};
</script>