<template>
  <div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <br />
    <span>authorName : {{ rename }}</span>
    <br />
    <div>
      <label>Name of author:</label>
      <input type="text" v-model="fullName" />
      <br />
      <label>First Name:</label>
      <input type="text" v-model="data.firstName" />
      <label>Last Name:</label>
      <input type="text" v-model="data.lastName" />
    </div>
    <br />
    <!-- computed property with get and set -->
    <div class="inline-block card">
      <div :class="{ onlineMarker: true, online: status, offline: !status }">
        <p class="use-state">User is {{ status ? "online" : "offline" }}</p>
      </div>
      <div class="margin">
        <input type="checkbox" v-model="status" />Toggle status
      </div>
    </div>
    <br />
    <!-- watch -->
    <div>
      <label for="question">Ask a yes/no question:</label>
      <input type="text" v-model="question" />
      <br />
      <span>{{ answer }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from "vue";
import axios from "axios";

const author = reactive({
  name: "",
  books: ["vue 2", "vue 3", "vue 4"],
});

const data = reactive({
  firstName: '',
  lastName: ''
})

const a = ref(1);

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "yes" : "no";
});

const rename = computed({
  get() {
    return a.value + 1;
  },
  set(newValue) {
    a.value = newValue - 1;
  },
});

// const fullName = computed(() => {
//   return `${data.firstName} ${data.lastName}`
// });

const fullName = computed({
  get() {
    return `${data.firstName} ${data.lastName}`
  },

  set(value) {
   var name = value.split('')
   data.firstName = name[0]
   data.lastName = name[name.length-1]
   console.log(data.firstName, data.lastName);
  }
})

const statusProxy = ref(false);

const status = computed({
  get() {
    return statusProxy.value;
  },
  set(newValue) {
    statusProxy.value = newValue;
  },
});

const question = ref("");
const answer = ref("");
const loading = ref(false);

watch(question, async (newQuestion) => {
  if (newQuestion.includes("?")) {
    loading.value = true;
    answer.value = "Thinking...";

    try {
      const res = await axios.get("https://yesno.wtf/api");

      answer.value = await res.data.answer;
    } catch (error) {
      // pass
    } finally {
      loading.value = false;
    }
  }
});
</script>

<style scoped>
.inline-block > * {
  display: inline-block;
}
.card {
  background-color: #ddd;
  padding: 20px;
  border-radius: 3px;
  margin-top: 1rem;
}

.onlineMarker {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.5s ease-out;
}

.online {
  background-color: #3c3;
}

.offline {
  background-color: #aaa;
}

.user-state {
  text-transform: uppercase;
  letter-spacing: 1rem;
}

.margin {
  margin-top: 1rem;
}

input {
  margin-right: 5px;
  margin-left: 5px;
}
</style>
