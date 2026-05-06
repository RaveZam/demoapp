<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCar, updateCar } from "./services/car-services";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const car_name = ref("");
const car_color = ref("");

async function handleGetCar(id) {
  const data = await getCar(id);

  car_name.value = data.car_name;
  car_color.value = data.car_color;
}

onMounted(() => {
  handleGetCar(id);
});

async function save(id) {
  await updateCar(id, car_name.value, car_color.value);
  router.push("/cars");
}
</script>

<template>
  <div class="page">
    <button class="back" @click="router.push('/cars')">← Back</button>
    <h1 class="title">Edit Car</h1>

    <div class="form">
      <label>Car Name</label>
      <input v-model="car_name" class="field" placeholder="Name" />

      <label>Car Color</label>
      <input v-model="car_color" class="field" placeholder="Color" />

      <button class="btn" @click="save(id)">Save</button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500&family=DM+Mono:wght@300;400&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page {
  min-height: 100vh;
  background: #f7f6f3;
  color: #111;
  font-family: "DM Mono", monospace;
  padding: 4rem 2rem;
  max-width: 560px;
  margin: 0 auto;
}

.back {
  background: none;
  border: none;
  font-family: "DM Mono", monospace;
  font-size: 0.75rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  margin-bottom: 2rem;
}

.back:hover {
  color: #111;
}

.title {
  font-family: "Cormorant", serif;
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

label {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #999;
}

.field {
  background: transparent;
  border: none;
  border-bottom: 1px solid #c8c4bb;
  padding: 0.4rem 0;
  font-family: "DM Mono", monospace;
  font-size: 0.8rem;
  color: #111;
  outline: none;
  margin-bottom: 0.75rem;
}

.field:focus {
  border-bottom-color: #111;
}

.btn {
  margin-top: 0.5rem;
  align-self: flex-start;
  background: #111;
  color: #f7f6f3;
  border: none;
  padding: 0.45rem 1.1rem;
  font-family: "DM Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.75;
}
</style>
