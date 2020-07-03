<template>
  <form class="container container-main" v-on:submit.prevent="login" method="post">
    <h1 class="text-center">Login Form</h1>
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
      <input type="submit" class="btn btn-primary" value="Log in"  v-bind:disabled="!enableSubmit" />
    </div>
  </form>
</template>

<script>
import InputGroup from "../validation/InputGroup";

export default {
  name: "login-form",
  components: {
    InputGroup
  },
  data() {
    return {
      enableSubmit: false,
      inputs: [
        {
          title: "Login or email",
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
          title: "Password",
          name: "password",
          placeholder: "",
          initValue: "",
          type: "password",
          required: true,
          classList: ["mb-3", "col-12", "col-md-6", "offset-md-3"],
          rules: []
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
      this.inputs[
        this.inputs.findIndex(el => el.name == inputState.name)
      ].valid = inputState.valid;
      this.enableSubmit =
        this.inputs.filter(el => el.valid).length == this.inputs.length;
    }
  }
};
</script>