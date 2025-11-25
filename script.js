// Portfolio Website JavaScript
// This file handles all dynamic content and interactions

// ===================================
// POPULATE CONTENT FROM DATA
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  populateHeroSection();
  populateAboutSection();
  populateEducation();
  populateExperience();
  populateProjects();
  populateSkills();
  populateHobbies();
  populateSocialLinks();
  populateFooter();
  initializeNavigation();
  initializeScrollAnimations();
  initializeScrollIndicator();
});

// Hero Section with Slideshow
function populateHeroSection() {
  const { personal } = portfolioData;

  document.getElementById('heroName').querySelector('.name').textContent = personal.name;
  document.getElementById('heroTitle').textContent = personal.title;
  document.getElementById('heroSubtitle').textContent = personal.subtitle;
  document.getElementById('heroUniversity').textContent = `${personal.university} • ${personal.batch}`;

  // Initialize slideshow if heroImages exist
  if (personal.heroImages && personal.heroImages.length > 0) {
    initializeHeroSlideshow(personal.heroImages);
  }
}

// Hero Slideshow Functionality
let currentSlide = 0;
let slideInterval;

function initializeHeroSlideshow(images) {
  const slideshowContainer = document.getElementById('heroSlideshow');
  const indicatorsContainer = document.getElementById('slideIndicators');

  // Create slides
  slideshowContainer.innerHTML = images.map((img, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}">
            <img src="${img.src}" alt="Muhammad Jawad Ali - Image ${index + 1}" class="slide-image">
            ${img.caption ? `<div class="slide-caption">${img.caption}</div>` : ''}
        </div>
    `).join('');

  // Create indicators
  indicatorsContainer.innerHTML = images.map((_, index) => `
        <button class="slide-indicator ${index === 0 ? 'active' : ''}" 
                data-slide="${index}" 
                aria-label="Go to slide ${index + 1}"></button>
    `).join('');

  // Add event listeners
  document.getElementById('slidePrev').addEventListener('click', () => changeSlide(-1));
  document.getElementById('slideNext').addEventListener('click', () => changeSlide(1));

  // Indicator clicks
  document.querySelectorAll('.slide-indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
  });

  // Auto-advance slides every 5 seconds
  startSlideshow();

  // Pause on hover
  slideshowContainer.addEventListener('mouseenter', stopSlideshow);
  slideshowContainer.addEventListener('mouseleave', startSlideshow);
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.slide-indicator');

  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.slide-indicator');

  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function startSlideshow() {
  stopSlideshow();
  slideInterval = setInterval(() => changeSlide(1), 5000);
}

function stopSlideshow() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

// About Section
function populateAboutSection() {
  const { personal } = portfolioData;

  document.getElementById('objectiveText').textContent = personal.objective;
  document.getElementById('summaryText').textContent = personal.summary;
}

// Education Timeline
function populateEducation() {
  const timeline = document.getElementById('educationTimeline');
  const { education } = portfolioData;

  timeline.innerHTML = education.map(edu => `
    <div class="timeline-item fade-in">
      <div class="timeline-content">
        <h3 class="timeline-degree">${edu.degree}</h3>
        <p class="timeline-institution">${edu.institution}</p>
        <p class="timeline-duration">${edu.duration}</p>
        ${edu.details ? `<p class="timeline-details">${edu.details}</p>` : ''}
        ${edu.grade ? `<p class="timeline-grade">${edu.grade}</p>` : ''}
      </div>
      <div class="timeline-marker"></div>
    </div>
  `).join('');
}

// Work Experience
function populateExperience() {
  const grid = document.getElementById('experienceGrid');
  const { experience } = portfolioData;

  grid.innerHTML = experience.map(exp => {
    // Generate media HTML if media exists
    let mediaHTML = '';
    if (exp.media && (exp.media.images.length > 0 || exp.media.videos.length > 0)) {
      mediaHTML = '<div class="experience-media">';

      // Add images
      if (exp.media.images.length > 0) {
        mediaHTML += '<div class="media-gallery">';
        exp.media.images.forEach(img => {
          mediaHTML += `<img src="${img}" alt="${exp.title}" class="media-image lightbox-trigger" loading="lazy" onclick="openLightbox('${img}')">`;
        });
        mediaHTML += '</div>';
      }

      // Add videos
      if (exp.media.videos.length > 0) {
        mediaHTML += '<div class="media-videos">';
        exp.media.videos.forEach(video => {
          mediaHTML += `<video controls class="media-video" preload="metadata" onclick="openVideoFullscreen(this)">
                        <source src="${video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        });
        mediaHTML += '</div>';
      }

      mediaHTML += '</div>';
    }

    return `
        <div class="experience-card fade-in">
          <div class="experience-header">
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-company">${exp.company}</p>
            <p class="experience-duration">${exp.duration}</p>
          </div>
          <ul class="experience-responsibilities">
            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
          ${mediaHTML}
        </div>
      `;
  }).join('');
}

// Projects
function populateProjects() {
  const grid = document.getElementById('projectsGrid');
  const { projects } = portfolioData;

  grid.innerHTML = projects.map(project => {
    // Generate media HTML if media exists
    let mediaHTML = '';
    if (project.media && (project.media.images.length > 0 || project.media.videos.length > 0)) {
      mediaHTML = '<div class="project-media">';

      // Add images
      if (project.media.images.length > 0) {
        mediaHTML += '<div class="media-gallery">';
        project.media.images.forEach(img => {
          mediaHTML += `<img src="${img}" alt="${project.title}" class="media-image lightbox-trigger" loading="lazy" onclick="openLightbox('${img}')">`;
        });
        mediaHTML += '</div>';
      }

      // Add videos
      if (project.media.videos.length > 0) {
        mediaHTML += '<div class="media-videos">';
        project.media.videos.forEach(video => {
          mediaHTML += `<video controls class="media-video" preload="metadata" onclick="openVideoFullscreen(this)">
                        <source src="${video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        });
        mediaHTML += '</div>';
      }

      mediaHTML += '</div>';
    }

    return `
        <div class="project-card fade-in">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-meta">
              <span>${project.duration}</span>
              ${project.association ? `<span>${project.association}</span>` : ''}
            </div>
          </div>
          ${mediaHTML}
          <p class="project-description">${project.description}</p>
          ${project.features && project.features.length > 0 ? `
            <ul class="project-features">
              ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          ` : ''}
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>` : ''}
            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo</a>` : ''}
          </div>
        </div>
      `;
  }).join('');
}

// Skills
function populateSkills() {
  const grid = document.getElementById('skillsGrid');
  const { skills } = portfolioData;

  grid.innerHTML = skills.map(skill => `
    <div class="skill-card fade-in">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
}

// Hobbies
function populateHobbies() {
  const container = document.getElementById('hobbiesContent');
  const { hobbies } = portfolioData;

  container.innerHTML = hobbies.map(hobby => `
    <div class="hobby-card fade-in">
      <h3 class="hobby-title">${hobby.title}</h3>
      <p class="hobby-description">
        ${hobby.description}
        ${hobby.link ? `You can see more on my <a href="${hobby.link.url}" target="_blank" rel="noopener noreferrer" class="hobby-link">${hobby.link.text}</a>.` : ''}
      </p>
    </div>
  `).join('');
}

// Social Links
function populateSocialLinks() {
  const container = document.getElementById('socialLinks');
  const { social } = portfolioData;

  const socialIcons = {
    linkedin: {
      name: 'LinkedIn',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'
    },
    github: {
      name: 'GitHub',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
    },
    twitter: {
      name: 'X (Twitter)',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
    },
    leetcode: {
      name: 'LeetCode',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>'
    },
    instagram: {
      name: 'Instagram',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
    },
    facebook: {
      name: 'Facebook',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>'
    }
  };

  const links = Object.entries(social)
    .filter(([key, url]) => url)
    .map(([key, url]) => {
      const icon = socialIcons[key];
      if (!icon) return '';

      return `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" data-tooltip="${icon.name}">
          ${icon.svg}
        </a>
      `;
    })
    .join('');

  container.innerHTML = links;

  // Setup resume download
  const resumeBtn = document.getElementById('resumeDownload');
  if (portfolioData.contact.resumeUrl) {
    resumeBtn.href = portfolioData.contact.resumeUrl;
  }
}

// Footer
function populateFooter() {
  document.getElementById('footerName').textContent = portfolioData.personal.name;
}

// ===================================
// NAVIGATION
// ===================================

function initializeNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Smooth scroll and close mobile menu
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }

      // Close mobile menu
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger skill bar animations
        if (entry.target.classList.contains('skill-card')) {
          const progressBar = entry.target.querySelector('.skill-progress');
          if (progressBar) {
            progressBar.style.width = progressBar.style.getPropertyValue('--skill-width');
          }
        }
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });

  // Observe skill cards
  document.querySelectorAll('.skill-card').forEach(el => {
    observer.observe(el);
  });
}

// ===================================
// SCROLL INDICATOR
// ===================================

function initializeScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    scrollToTop,
    debounce
  };
}

// ===================================
// LIGHTBOX FUNCTIONALITY
// ===================================
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');

  lightboxImage.src = imageSrc;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Initialize lightbox controls
document.addEventListener('DOMContentLoaded', () => {
  const lightboxClose = document.getElementById('lightboxClose');
  const lightbox = document.getElementById('lightbox');

  // Close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Click outside image to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});

// ===================================
// VIDEO FULLSCREEN FUNCTIONALITY
// ===================================
function openVideoFullscreen(videoElement) {
  // Request fullscreen for the video element
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.webkitRequestFullscreen) { // Safari
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.mozRequestFullScreen) { // Firefox
    videoElement.mozRequestFullScreen();
  } else if (videoElement.msRequestFullscreen) { // IE/Edge
    videoElement.msRequestFullscreen();
  }

  // Auto-play when entering fullscreen
  videoElement.play();
}
