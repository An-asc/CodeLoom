<template>
  <div class="service-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.service-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 1rem;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .service-card {
    width: 100%;
  }
}
</style>