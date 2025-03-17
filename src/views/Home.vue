<template>
    <!-- Sección de características -->
    <section class="wrapper">
      <div class="section-header">
        <h2>Features That Make Video Editing Easy</h2>
        <p>
          Our AI-powered editor gives you professional-quality results without
          the learning curve
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎬</div>
          <h3>Auto Edit</h3>
          <p>
            Let our AI analyze your footage and create a first cut automatically
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔊</div>
          <h3>Audio Enhancement</h3>
          <p>Clear background noise and enhance voice quality with one click</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3>Color Grading</h3>
          <p>Apply professional color presets or create your own look</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Multi-platform</h3>
          <p>
            Edit on your computer, tablet, or phone - projects sync
            automatically
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Fast Export</h3>
          <p>Export in multiple formats optimized for any platform</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3>Voice Commands</h3>
          <p>Control the editor with your voice for a hands-free experience</p>
        </div>
      </div>
    </section>

    <!-- Sección de testimonios -->
    <section class="testimonials-section ">
      <div class="wrapper">
        <div>
          <h2>What Our Users Say</h2>
          <p>
            Join thousands of content creators who have simplified their video
            editing workflow
          </p>
        </div>

        <div class="testimonials-carousel">
          <div
            class="testimonial-card"
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
              <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">
              <div class="author-image">
                <!-- Placeholder for user image -->
                <div class="image-placeholder">
                  {{ getInitials(testimonial.name) }}
                </div>
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
    <section class="wrapper">
          <h2>Choose Your Plan</h2>
          <p class="section-description">
            Simple, transparent pricing for every level of creator
          </p>

        <div class="pricing-toggle">
          <span :class="{ active: !isAnnual }">Monthly</span>
          <label class="switch">
            <input type="checkbox" v-model="isAnnual" />
            <span class="slider round"></span>
          </label>
          <span :class="{ active: isAnnual }"
            >Annual <span class="save-badge">Save 20%</span></span
          >
        </div>

        <div class="features-grid">
          <div class="pricing-card" v-for="(plan, index) in plans" :key="index">
            <div class="pricing-header">
              <h3 class="plan-name">{{ plan.name }}</h3>
              <p class="plan-description">{{ plan.description }}</p>
            </div>

            <div class="pricing-price">
              <h4 class="price">
                ${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
                <span class="price-period">{{
                  isAnnual ? "/year" : "/month"
                }}</span>
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
              <button class="pricing-button" :class="{ primary: plan.popular }">
                {{ plan.popular ? "Start Free Trial" : "Get Started" }}
              </button>
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
            Join thousands of creators who've simplified their workflow with
            XORA
          </p>
          <div class="cta-buttons">
            <button class="cta-button primary">Start Free Trial</button>
            <button class="cta-button secondary">Watch Demo</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isAnnual: false,
      testimonials: [
        {
          text: "XORA has completely transformed my content creation process. What used to take me hours now takes minutes, and the quality is even better!",
          name: "Alex Johnson",
          role: "YouTube Creator",
        },
        {
          text: "The AI features are mind-blowing. I can focus on creating content while XORA handles the technical editing aspects.",
          name: "Sarah Williams",
          role: "Social Media Manager",
        },
        {
          text: "As someone with no technical background, I was able to create professional-looking videos on day one. Incredible tool!",
          name: "Michael Chen",
          role: "Small Business Owner",
        },
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
            "Standard support",
          ],
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
            "Advanced color grading",
          ],
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
            "Advanced analytics",
          ],
        },
      ],
    };
  },
  methods: {
    getInitials(name) {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("");
    },
  },
};
</script>

