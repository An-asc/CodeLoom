<template>
  <div class="home">
    <section class="hero">
      <h1>Bienvenido a DevWeb</h1>
      <p>Soluciones web modernas y eficientes.</p>
      <router-link to="/servicios" class="btn">Ver Servicios</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  background-color: #42b983;
  color: white;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn {
  background-color: white;
  color: #42b983;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.btn:hover {
  background-color: #f4f4f9;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
</style>