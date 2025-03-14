<template>
  <div class="home">
    <!-- Sección de características -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Features That Make Video Editing Easy</h2>
          <p class="section-description">
            Our AI-powered editor gives you professional-quality results without the learning curve
          </p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎬</div>
            <h3 class="feature-title">Auto Edit</h3>
            <p class="feature-description">
              Let our AI analyze your footage and create a first cut automatically
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔊</div>
            <h3 class="feature-title">Audio Enhancement</h3>
            <p class="feature-description">
              Clear background noise and enhance voice quality with one click
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-title">Color Grading</h3>
            <p class="feature-description">
              Apply professional color presets or create your own look
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">Multi-platform</h3>
            <p class="feature-description">
              Edit on your computer, tablet, or phone - projects sync automatically
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3 class="feature-title">Fast Export</h3>
            <p class="feature-description">
              Export in multiple formats optimized for any platform
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3 class="feature-title">Voice Commands</h3>
            <p class="feature-description">
              Control the editor with your voice for a hands-free experience
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de testimonios -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our Users Say</h2>
          <p class="section-description">
            Join thousands of content creators who have simplified their video editing workflow
          </p>
        </div>
        
        <div class="testimonials-carousel">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <p class="testimonial-text">{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <!-- Placeholder for user image -->
                <div class="image-placeholder">{{ getInitials(testimonial.name) }}</div>
              </div>
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.name }}</h4>
                <p class="author-role">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de precios -->
    <section class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Choose Your Plan</h2>
          <p class="section-description">
            Simple, transparent pricing for every level of creator
          </p>
        </div>
        
        <div class="pricing-toggle">
          <span :class="{ 'active': !isAnnual }">Monthly</span>
          <label class="switch">
            <input type="checkbox" v-model="isAnnual">
            <span class="slider round"></span>
          </label>
          <span :class="{ 'active': isAnnual }">Annual <span class="save-badge">Save 20%</span></span>
        </div>
        
        <div class="pricing-grid">
          <div class="pricing-card" v-for="(plan, index) in plans" :key="index">
            <div class="pricing-header">
              <h3 class="plan-name">{{ plan.name }}</h3>
              <p class="plan-description">{{ plan.description }}</p>
            </div>
            
            <div class="pricing-price">
              <h4 class="price">
                ${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
                <span class="price-period">{{ isAnnual ? '/year' : '/month' }}</span>
              </h4>
              <p class="price-note" v-if="isAnnual">{{ plan.savingsNote }}</p>
            </div>
            
            <div class="pricing-features">
              <ul>
                <li v-for="(feature, fIndex) in plan.features" :key="fIndex">
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="pricing-action">
              <button class="pricing-button" :class="{ 'primary': plan.popular }">
                {{ plan.popular ? 'Start Free Trial' : 'Get Started' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sección de CTA final -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your Video Editing?</h2>
          <p class="cta-description">
            Join thousands of creators who've simplified their workflow with XORA
          </p>
          <div class="cta-buttons">
            <button class="cta-button primary">Start Free Trial</button>
            <button class="cta-button secondary">Watch Demo</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isAnnual: false,
      testimonials: [
        {
          text: "XORA has completely transformed my content creation process. What used to take me hours now takes minutes, and the quality is even better!",
          name: "Alex Johnson",
          role: "YouTube Creator"
        },
        {
          text: "The AI features are mind-blowing. I can focus on creating content while XORA handles the technical editing aspects.",
          name: "Sarah Williams",
          role: "Social Media Manager"
        },
        {
          text: "As someone with no technical background, I was able to create professional-looking videos on day one. Incredible tool!",
          name: "Michael Chen",
          role: "Small Business Owner"
        }
      ],
      plans: [
        {
          name: "Starter",
          description: "Perfect for beginners and casual creators",
          monthlyPrice: 9.99,
          annualPrice: 95.88,
          savingsNote: "Save $24 compared to monthly",
          popular: false,
          features: [
            "Up to 720p export resolution",
            "5 projects",
            "Basic AI editing features",
            "2GB cloud storage",
            "Standard support"
          ]
        },
        {
          name: "Professional",
          description: "For serious content creators",
          monthlyPrice: 19.99,
          annualPrice: 191.88,
          savingsNote: "Save $48 compared to monthly",
          popular: true,
          features: [
            "Up to 4K export resolution",
            "Unlimited projects",
            "All AI editing features",
            "20GB cloud storage",
            "Priority support",
            "Remove watermark",
            "Advanced color grading"
          ]
        },
        {
          name: "Enterprise",
          description: "For teams and businesses",
          monthlyPrice: 49.99,
          annualPrice: 479.88,
          savingsNote: "Save $120 compared to monthly",
          popular: false,
          features: [
            "Everything in Professional",
            "Team collaboration tools",
            "100GB cloud storage",
            "API access",
            "Dedicated account manager",
            "Custom branding options",
            "Advanced analytics"
          ]
        }
      ]
    }
  },
  methods: {
    getInitials(name) {
      return name.split(' ').map(word => word[0]).join('');
    }
  }
}
</script>

<style scoped>
/* Estilos generales de sección */
section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Estilos de la sección de características */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background-color: rgba(24, 32, 70, 0.6);
  border-radius: 10px;
  padding: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(66, 198, 255, 0.1);
}

.feature-icon {
  font-size: 36px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Estilos de la sección de testimonios */
.testimonials-section {
  background-color: rgba(24, 32, 70, 0.3);
}

.testimonials-carousel {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(66, 198, 255, 0.5) transparent;
}

.testimonials-carousel::-webkit-scrollbar {
  height: 6px;
}

.testimonials-carousel::-webkit-scrollbar-thumb {
  background: rgba(66, 198, 255, 0.5);
  border-radius: 3px;
}

.testimonial-card {
  min-width: 350px;
  background-color: rgba(24, 32, 70, 0.6);
  border-radius: 10px;
  padding: 30px;
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-text {
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-image {
  margin-right: 15px;
}

.image-placeholder {
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.author-name {
  font-weight: 600;
  margin-bottom: 5px;
}

.author-role {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

/* Estilos de la sección de precios */
.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  gap: 15px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(24, 32, 70, 0.6);
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #42c6ff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #42c6ff;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.pricing-toggle span {
  color: rgba(255, 255, 255, 0.7);
}

.pricing-toggle span.active {
  color: white;
  font-weight: 600;
}

.save-badge {
  background-color: #e83a95;
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 5px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.pricing-card {
  background-color: rgba(24, 32, 70, 0.6);
  border-radius: 10px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(66, 198, 255, 0.1);
}

.plan-name {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.plan-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

.pricing-price {
  margin-bottom: 30px;
}

.price {
  font-size: 36px;
  font-weight: 700;
}

.price-period {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}

.price-note {
  font-size: 14px;
  color: #42c6ff;
  margin-top: 5px;
}

.pricing-features {
  flex: 1;
  margin-bottom: 30px;
}

.pricing-features ul {
  padding-left: 20px;
}

.pricing-features li {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.pricing-button {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
  border: 2px solid #42c6ff;
  background-color: transparent;
  color: #42c6ff;
  cursor: pointer;
  transition: all 0.3s;
}

.pricing-button:hover {
  background-color: rgba(66, 198, 255, 0.1);
}

.pricing-button.primary {
  background: linear-gradient(to right, #e83a95, #42c6ff);
  border: none;
  color: white;
}

.pricing-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.3);
}

/* Estilos de la sección CTA */
.cta-section {
  background: linear-gradient(135deg, rgba(232, 58, 149, 0.1), rgba(66, 198, 255, 0.1));
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

.cta-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta-button {
  padding: 15px 30px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button.primary {
  background: linear-gradient(to right, #e83a95, #42c6ff);
  border: none;
  color: white;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.3);
}

.cta-button.secondary {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .section-title {
    font-size: 30px;
  }
  
  .testimonials-carousel {
    flex-direction: column;
  }
  
  .testimonial-card {
    min-width: auto;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
}
</style>