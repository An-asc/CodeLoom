<template>
  <header class="header">
    <nav class="top-nav">
      <div class="container nav-container">
        <div class="logo">
          <span class="logo-text">XORA</span>
        </div>
        <div class="nav-menu">
          <a href="#" class="nav-link">Features</a>
          <a href="#" class="nav-link">Pricing</a>
          <a href="#" class="nav-link">Tutorials</a>
          <a href="#" class="nav-link">Blog</a>
          <button class="login-btn">Sign In</button>
          <button class="signup-btn">Get Started</button>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="header-content">
        <div class="header-text">
          <div class="category-tag">VIDEO EDITING</div>
          <h1 class="title">AMAZINGLY SIMPLE</h1>
          <p class="description">
            We designed XORA AI Video Editor to be an easy to use, quick to learn and
            surprisingly powerful.
          </p>
          <div class="cta-button">
            <button class="try-now-btn">
              <span class="btn-icon">▶</span>
              TRY IT NOW
            </button>
          </div>
        </div>
        <div class="header-image">
          <div class="cube-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class="cube-svg">
              <!-- Base platform -->
              <ellipse cx="150" cy="220" rx="100" ry="30" fill="#121838" />
              
              <!-- Glow effect around base -->
              <ellipse cx="150" cy="220" rx="110" ry="35" fill="none" stroke="url(#baseGlow)" stroke-width="3" opacity="0.7" />

              <!-- Yellow cube -->
              <g class="cube yellow">
                <rect x="180" y="120" width="60" height="60" rx="5" fill="#ffbb33" opacity="0.9" />
                <rect x="180" y="130" width="60" height="60" rx="5" fill="#ffbb33" opacity="0.7" />
                <rect x="180" y="140" width="60" height="60" rx="5" fill="#ffbb33" opacity="0.5" />
              </g>

              <!-- Blue cube -->
              <g class="cube blue">
                <rect x="110" y="150" width="60" height="60" rx="5" fill="#42c6ff" opacity="0.9" />
                <rect x="110" y="160" width="60" height="60" rx="5" fill="#42c6ff" opacity="0.7" />
                <rect x="110" y="170" width="60" height="60" rx="5" fill="#42c6ff" opacity="0.5" />
              </g>

              <!-- Pink cube -->
              <g class="cube pink">
                <rect x="150" y="90" width="60" height="60" rx="5" fill="#e83a95" opacity="0.9" />
                <rect x="150" y="100" width="60" height="60" rx="5" fill="#e83a95" opacity="0.7" />
                <rect x="150" y="110" width="60" height="60" rx="5" fill="#e83a95" opacity="0.5" />
              </g>

              <!-- Glossy reflection on cubes -->
              <rect x="155" y="95" width="50" height="10" rx="5" fill="white" opacity="0.3" />
              <rect x="185" y="125" width="50" height="10" rx="5" fill="white" opacity="0.3" />
              <rect x="115" y="155" width="50" height="10" rx="5" fill="white" opacity="0.3" />

              <!-- Platform glow gradient -->
              <defs>
                <linearGradient id="baseGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#e83a95" />
                  <stop offset="50%" stop-color="#42c6ff" />
                  <stop offset="100%" stop-color="#ffbb33" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
.header {
  background-color: #0a0e29;
  color: white;
  padding: 0 0 60px;
  width: 100%;
}

.top-nav {
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 60px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo-text {
  background: linear-gradient(to right, #e83a95, #42c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #42c6ff;
}

.login-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s;
}

.login-btn:hover {
  color: #42c6ff;
}

.signup-btn {
  background: linear-gradient(to right, #e83a95, #42c6ff);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s;
}

.signup-btn:hover {
  transform: translateY(-2px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-text {
  flex: 1;
  padding-right: 40px;
}

.category-tag {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.title {
  font-size: 54px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 20px 0;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 500px;
}

.try-now-btn {
  background-color: #182046;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.try-now-btn:hover {
  background-color: #232d5f;
}

.btn-icon {
  font-size: 14px;
}

.header-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube-container {
  width: 300px;
  height: 300px;
  position: relative;
  perspective: 1000px;
}

.cube-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(66, 198, 255, 0.3))
         drop-shadow(0 0 20px rgba(232, 58, 149, 0.2))
         drop-shadow(0 0 30px rgba(255, 187, 51, 0.2));
  transition: transform 0.5s ease;
}

.cube-svg:hover {
  transform: translateY(-10px);
}

/* Animación de brillo para los cubos */
@keyframes glow {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
  100% {
    filter: brightness(1);
  }
}

.cube.pink {
  animation: glow 4s infinite ease-in-out;
}

.cube.blue {
  animation: glow 4s infinite ease-in-out 1s;
}

.cube.yellow {
  animation: glow 4s infinite ease-in-out 2s;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }
  
  .header-text {
    width: 100%;
    padding-right: 0;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .title {
    font-size: 42px;
  }
  
  .cta-button {
    display: flex;
    justify-content: center;
  }
}
</style>