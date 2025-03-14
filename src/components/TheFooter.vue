<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2 class="logo-text">XORA</h2>
          <p class="logo-tagline">AI-powered video editing made simple</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h3 class="footer-heading">Product</h3>
            <a href="#" class="footer-link">Features</a>
            <a href="#" class="footer-link">Pricing</a>
            <a href="#" class="footer-link">Tutorials</a>
            <a href="#" class="footer-link">Updates</a>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-heading">Company</h3>
            <a href="#" class="footer-link">About</a>
            <a href="#" class="footer-link">Blog</a>
            <a href="#" class="footer-link">Careers</a>
            <a href="#" class="footer-link">Contact</a>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-heading">Resources</h3>
            <a href="#" class="footer-link">Community</a>
            <a href="#" class="footer-link">Help Center</a>
            <a href="#" class="footer-link">API</a>
            <a href="#" class="footer-link">Status</a>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-heading">Legal</h3>
            <a href="#" class="footer-link">Privacy</a>
            <a href="#" class="footer-link">Terms</a>
            <a href="#" class="footer-link">Security</a>
            <a href="#" class="footer-link">Cookies</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">© 2025 XORA. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.footer {
  background-color: #0a0e29;
  color: white;
  padding: 60px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
}

.footer-logo {
  flex: 0 0 300px;
  margin-bottom: 30px;
}

.logo-text {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-column {
  min-width: 120px;
}

.footer-heading {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
}

.footer-link {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  font-size: 16px;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #42c6ff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  transition: color 0.3s;
}

.social-link:hover {
  color: #42c6ff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>