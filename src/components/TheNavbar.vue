<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">DevWeb</router-link>
      <div class="navbar-links">
        <router-link to="/servicios">Servicios</router-link>
        <router-link to="/precios">Precios</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 1rem;
}

.navbar-links a:hover {
  color: #42b983;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-links {
    margin-top: 10px;
  }

  .navbar-links a {
    margin-left: 0;
    margin-right: 15px;
  }
}
</style>