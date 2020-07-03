<template>
  <div v-bind:class="classList">
    <label>{{title}}</label>
    <input
      v-bind:type="type"
      v-bind:name="name"
      v-bind:class="inputClassObject"
      v-bind:placeholder="placeholder"
      v-bind:value="value"
      v-bind:required="required"
      v-on:input="validateInput($event.target.value)"
    />
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">
      <div v-for="(errMsg, i) in errors" :key="i" v-text="errMsg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-group",
  props: [
    "title",
    "name",
    "placeholder",
    "classList",
    "type",
    "required",
    "initValue",
    "rules"
  ],
  data() {
    return {
      value: this.initValue,
      errors: [],
      needsValidation:
        this.rules && Array.isArray(this.rules) && this.rules.length > 0
    };
  },
  computed: {
    inputClassObject() {
      return {
        "form-control": true,
        "is-valid":
          this.needsValidation && this.value && this.errors.length == 0,
        "is-invalid":
          this.needsValidation && this.value && this.errors.length > 0
      };
    }
  },
  methods: {
    validateInput(newValue) {
      this.value = newValue;
      if (this.needsValidation) {
        this.errors = [];
        this.rules.forEach(({ rule, msg, params = [] }) => {
          if (!rule(this.value, ...params)) this.errors.push(msg(...params));
        });
      }
      this.$emit("input-state-changed", {
        name: this.name,
        initValue: newValue,
        valid: this.errors.length == 0
      });
    }
  }
};
</script>