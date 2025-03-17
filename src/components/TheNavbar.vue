<template>
  <header class="header">
  <div class="light-animation"></div>
  <div class="content">
    <div class="nav">
      <div class="logo">
        <img src="/src/assets/img/logo.avif" alt="CoodeLoom Agencia de Software" />
        <p>CodeLoom</p>
      </div>
      <div class="menu">
        <a href="#">Pricing</a>
        <a href="#" class="get-started">Get Started</a>
      </div>
    </div>
    <div class="hero">
      <div class="video-editing">VIDEO EDITING</div>
      <h1>AMAZINGLY SIMPLE</h1>
      <p>We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful.</p>
      <button class="try-it-now">▶ TRY IT NOW</button>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
.header {
  background-color: #0a0e29;
  color: white;
  padding: 30px 0 60px;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 500px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  p {
    background: linear-gradient(to right, #e83a95, #42c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    margin: 0;
    }
}


/* Contenido del header */
.content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Animación de luces de fondo */
.light-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(45deg, #0a0e29, #0a0e29);
}

.light-animation::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle, rgba(233, 30, 99, 0.05) 10%, transparent 30%) 0 0/80px 80px,
    radial-gradient(circle, rgba(33, 150, 243, 0.05) 15%, transparent 35%) 30px 30px/100px 100px,
    radial-gradient(circle, rgba(255, 193, 7, 0.05) 20%, transparent 40%) 15px 15px/120px 120px;
  animation: lightsMove 15s linear infinite;
}

.light-animation::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(233, 30, 99, 0.15) 50%, transparent 100%) 0 0/200px 100%,
    linear-gradient(90deg, transparent 0%, rgba(33, 150, 243, 0.15) 50%, transparent 100%) 100px 0/300px 100%;
  animation: scanlines 8s linear infinite;
}

/* Elementos de neón que pasan */
@keyframes lightsMove {
  0% {
    transform: translateX(-25%) translateY(-25%) rotate(0deg);
  }
  100% {
    transform: translateX(0%) translateY(0%) rotate(360deg);
  }
}

@keyframes scanlines {
  0% {
    background-position: -400px 0, -600px 0;
  }
  100% {
    background-position: 400px 0, 600px 0;
  }
}

/* Efecto de resplandor en los bordes inferiores */
.header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(233, 30, 99, 0.6), 
    rgba(33, 150, 243, 0.6), 
    rgba(255, 193, 7, 0.6),
    transparent
  );
  animation: glowingBorder 8s linear infinite;
}

@keyframes glowingBorder {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Estilos adicionales para hacer que se vea bien */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #f06;
}

.menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu a {
  color: white;
  text-decoration: none;
}

.get-started {
  background: linear-gradient(45deg, #f06, #39f);
  padding: 10px 20px;
  border-radius: 5px;
}

.hero {
  padding: 80px 0;
  max-width: 600px;
}

.video-editing {
  font-size: 14px;
  margin-bottom: 20px;
}

h1 {
  font-size: 48px;
  margin: 0 0 20px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.8;
}

.try-it-now {
  background-color: #1a237e;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>
