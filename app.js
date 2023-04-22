const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: "",
    };
  },
  methods: {
    handleAddGoal() {
      this.goals.push(this.inputGoal);
      this.inputGoal = "";
    },
    handleDeleteGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
