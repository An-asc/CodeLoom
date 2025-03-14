<template>
  <div class="features-page">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Powerful Features For Every Creator</h1>
          <p class="hero-description">
            Discover all the tools that make XORA the most intuitive AI video editor
          </p>
        </div>
      </div>
    </section>
    
    <section class="services-section">
      <div class="container">
        <div class="services-grid">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :icon-bg-color="service.iconBgColor"
            :features="service.features"
            :action-text="service.actionText"
            :is-featured="service.featured"
            @action-click="navigateToDetail(service.id)"
          />
        </div>
      </div>
    </section>
    
    <section class="compare-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How XORA Compares</h2>
          <p class="section-description">
            See how we stack up against traditional video editing software
          </p>
        </div>
        
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>XORA</th>
                <th>Traditional Editors</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in comparisonItems" :key="index">
                <td>{{ item.feature }}</td>
                <td class="xora-cell">
                  <span class="status" :class="{ 'positive': item.xora === 'Yes', 'negative': item.xora === 'No' }">
                    {{ item.xora }}
                  </span>
                  <span v-if="item.xoraDetail" class="detail">{{ item.xoraDetail }}</span>
                </td>
                <td class="traditional-cell">
                  <span class="status" :class="{ 'positive': item.traditional === 'Yes', 'negative': item.traditional === 'No' }">
                    {{ item.traditional }}
                  </span>
                  <span v-if="item.traditionalDetail" class="detail">{{ item.traditionalDetail }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <section class="tech-section">
      <div class="container">
        <div class="tech-content">
          <div class="tech-info">
            <h2 class="tech-title">Powered by Advanced AI</h2>
            <p class="tech-description">
              Our proprietary algorithms analyze your footage frame by frame to deliver professional results without the technical complexity.
            </p>
            <ul class="tech-features">
              <li>Intelligent scene detection</li>
              <li>Automated B-roll integration</li>
              <li>Smart color correction</li>
              <li>Audio enhancement and noise reduction</li>
              <li>Natural language editing commands</li>
            </ul>
            <button class="tech-button">Learn About Our Technology</button>
          </div>
          <div class="tech-image">
            <div class="tech-image-placeholder">AI Visualization</div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Get answers to common questions about XORA's features
          </p>
        </div>
        
        <div class="faq-list">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="faq-item"
            :class="{ 'active': activeFaq === index }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ item.question }}</h3>
              <span class="faq-icon">{{ activeFaq === index ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="activeFaq === index">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Experience the Future of Video Editing?</h2>
          <p class="cta-description">
            Try XORA today and revolutionize your content creation process
          </p>
          <div class="cta-buttons">
            <button class="cta-button primary">Start Free Trial</button>
            <button class="cta-button secondary">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue';

export default {
  name: 'Features',
  components: {
    ServiceCard
  },
  data() {
    return {
      activeFaq: null,
      services: [
        {
          id: 'auto-edit',
          title: 'AI Auto-Edit',
          description: 'Let our AI create perfect cuts based on content analysis',
          icon: '🎬',
          iconBgColor: 'rgba(232, 58, 149, 0.1)',
          features: [
            'Smart scene detection',
            'Content-aware cutting',
            'Automatic pacing',
            'B-roll integration'
          ],
          actionText: 'Learn More',
          featured: true
        },
        {
          id: 'audio',
          title: 'Audio Enhancement',
          description: 'Crystal clear audio with background noise removal',
          icon: '🔊',
          iconBgColor: 'rgba(66, 198, 255, 0.1)',
          features: [
            'Background noise reduction',
            'Voice enhancement',
            'Music matching',
            'Automatic subtitles'
          ],
          actionText: 'Explore Features',
          featured: false
        },
        {
          id: 'color',
          title: 'Smart Color Grading',
          description: 'Professional color presets and automatic correction',
          icon: '🎨',
          iconBgColor: 'rgba(255, 187, 51, 0.1)',
          features: [
            'One-click color presets',
            'Scene matching',
            'HDR enhancement',
            'Custom LUTs support'
          ],
          actionText: 'See Examples',
          featured: false
        },
        {
          id: 'templates',
          title: 'Video Templates',
          description: 'Start with ready-to-use templates for quick editing',
          icon: '📋',
          iconBgColor: 'rgba(66, 198, 255, 0.1)',
          features: [
            'Social media formats',
            'YouTube optimized',
            'Customizable elements',
            'Trending styles'
          ],
          actionText: 'Browse Templates',
          featured: false
        },
        {
          id: 'transitions',
          title: 'Smart Transitions',
          description: 'Smooth scene changes with intelligent transitions',
          icon: '🔄',
          iconBgColor: 'rgba(232, 58, 149, 0.1)',
          features: [
            'Context-aware transitions',
            'Motion-based effects',
            'Custom transition builder',
            'Transition presets'
          ],
          actionText: 'View Transitions',
          featured: false
        },
        {
          id: 'export',
          title: 'Advanced Export',
          description: 'Export optimized for any platform or device',
          icon: '🚀',
          iconBgColor: 'rgba(255, 187, 51, 0.1)',
          features: [
            'Multi-platform presets',
            'Custom resolution',
            'Cloud rendering',
            'Batch export'
          ],
          actionText: 'Export Options',
          featured: false
        }
      ],
      comparisonItems: [
        {
          feature: 'Learning Curve',
          xora: 'Easy',
          xoraDetail: 'Start editing in minutes',
          traditional: 'Steep',
          traditionalDetail: 'Weeks to months to master'
        },
        {
          feature: 'AI-Powered Editing',
          xora: 'Yes',
          xoraDetail: 'Full suite of AI tools',
          traditional: 'Limited',
          traditionalDetail: 'Basic features only'
        },
        {
          feature: 'Automatic Scene Detection',
          xora: 'Yes',
          traditional: 'No'
        },
        {
          feature: 'Voice Commands',
          xora: 'Yes',
          traditional: 'No'
        },
        {
          feature: 'Cloud Storage',
          xora: 'Yes',
          xoraDetail: 'Included with all plans',
          traditional: 'Varies',
          traditionalDetail: 'Usually paid extra'
        },
        {
          feature: 'Cross-Platform',
          xora: 'Yes',
          xoraDetail: 'Web, mobile, desktop',
          traditional: 'Limited',
          traditionalDetail: 'Usually desktop only'
        },
        {
          feature: 'One-Click Templates',
          xora: 'Yes',
          traditional: 'Limited'
        },
        {
          feature: 'Collaboration Tools',
          xora: 'Yes',
          traditional: 'Limited'
        }
      ],
      faqItems: [
        {
          question: 'Does XORA work on all devices?',
          answer: 'Yes, XORA is built to work seamlessly across desktop computers, tablets, and smartphones. Our cloud-based infrastructure ensures your projects are accessible from anywhere, and our interface adapts to different screen sizes.'
        },
        {
          question: 'How does the AI auto-editing feature work?',
          answer: 'Our AI analyzes your footage using computer vision to identify scenes, detect faces, recognize action, and assess quality. It then makes intelligent editing decisions based on editing principles, content, and your preferences to create a first cut automatically.'
        },
        {
          question: 'Can I import projects from other editing software?',
          answer: 'Yes, XORA supports importing projects from major editing software including Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. You can import timeline data, cuts, and basic effects.'
        },
        {
          question: 'What video formats does XORA support?',
          answer: 'XORA supports all major video formats including MP4, MOV, AVI, WMV, and MKV. You can also import various image formats, audio files, and even directly import from cloud storage services like Google Drive and Dropbox.'
        },
        {
          question: 'Is there a limit to project length or complexity?',
          answer: 'XORA plans have different limits based on your subscription. The free plan supports projects up to 10 minutes, while paid plans allow for longer videos and more complex edits with additional tracks and effects.'
        },
        {
          question: 'Can I collaborate with others on a project?',
          answer: 'Absolutely! XORA offers real-time collaboration features that allow multiple team members to work on the same project simultaneously. You can assign roles, leave comments, and track changes made by different collaborators.'
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      if (this.activeFaq === index) {
        this.activeFaq = null;
      } else {
        this.activeFaq = index;
      }
    },
    navigateToDetail(id) {
      this.$router.push(`/features/${id}`);
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  padding: 100px 0 60px;
  background: linear-gradient(135deg, rgba(232, 58, 149, 0.1), rgba(66, 198, 255, 0.1));
  text-align: center;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
}

/* Services Section */
.services-section {
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

/* Comparison Section */
.compare-section {
  padding: 80px 0;
  background-color: rgba(24, 32, 70, 0.3);
}

.comparison-table-wrapper {
  overflow-x: auto;
  margin-top: 40px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 15px 20px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-table th {
  background-color: rgba(24, 32, 70, 0.6);
  font-weight: 600;
  font-size: 18px;
}

.comparison-table th:first-child {
  border-top-left-radius: 10px;
}

.comparison-table th:last-child {
  border-top-right-radius: 10px;
}

.status {
  font-weight: 600;
}

.status.positive {
  color: #4CAF50;
}

.status.negative {
  color: rgba(255, 255, 255, 0.5);
}

.detail {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;
}

/* Tech Section */
.tech-section {
  padding: 80px 0;
}

.tech-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.tech-info {
  flex: 1;
}

.tech-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tech-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
}

.tech-features {
  margin-bottom: 30px;
  padding-left: 20px;
}

.tech-features li {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.tech-button {
  padding: 12px 25px;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.tech-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.3);
}

.tech-image {
  flex: 1;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 400px;
  background: linear-gradient(135deg, rgba(232, 58, 149, 0.1), rgba(66, 198, 255, 0.1));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background-color: rgba(24, 32, 70, 0.3);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(24, 32, 70, 0.6);
  transition: all 0.3s;
}

.faq-item.active {
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.1);
}

.faq-question {
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.faq-icon {
  font-size: 24px;
  color: #42c6ff;
}

.faq-answer {
  padding: 0 20px 20px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(232, 58, 149, 0.1), rgba(66, 198, 255, 0.1));
  text-align: center;
  padding: 80px 0;
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

/* Responsive styles */
@media (max-width: 992px) {
  .tech-content {
    flex-direction: column;
  }
  
  .tech-info,
  .tech-image {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
}
</style>