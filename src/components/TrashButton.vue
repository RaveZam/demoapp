<script setup>
defineEmits(["click"]);
</script>

<template>
  <button class="delete-btn" @click="$emit('click')">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6l-1 14H6L5 6"/>
      <path d="M10 11v6M14 11v6"/>
      <path d="M9 6V4h6v2"/>
    </svg>
  </button>
</template>

<style scoped>
.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #bbb;
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.15s;
}

.delete-btn:hover {
  color: #111;
}
</style>
