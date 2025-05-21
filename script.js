// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // Initialize AOS Animation Library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const closeNav = document.querySelector('.close-nav');
    const nav = document.querySelector('nav');
    
    navToggle.addEventListener('click', function() {
      nav.classList.add('active');
    });
    
    closeNav.addEventListener('click', function() {
      nav.classList.remove('active');
    });
    
    // Close mobile nav when clicking a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
    
    // Tabs functionality for education and experience
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to current button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let valid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name.value.trim()) {
          valid = false;
          showError(name, 'Please enter your name');
        } else {
          removeError(name);
        }
        
        if (!email.value.trim()) {
          valid = false;
          showError(email, 'Please enter your email');
        } else if (!isValidEmail(email.value)) {
          valid = false;
          showError(email, 'Please enter a valid email');
        } else {
          removeError(email);
        }
        
        if (!message.value.trim()) {
          valid = false;
          showError(message, 'Please enter your message');
        } else {
          removeError(message);
        }
        
        if (valid) {
          // In a real implementation, you'd send the form data to a server
          // For demo purposes, just show a success message
          const formSuccess = document.createElement('div');
          formSuccess.className = 'form-success';
          formSuccess.textContent = 'Your message has been sent successfully!';
          
          contactForm.innerHTML = '';
          contactForm.appendChild(formSuccess);
        }
      });
    }
    
    // Helper functions for form validation
    function showError(input, message) {
      const formGroup = input.parentElement;
      let errorElement = formGroup.querySelector('.error-message');
      
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
      }
      
      errorElement.textContent = message;
      input.classList.add('is-invalid');
    }
    
    function removeError(input) {
      const formGroup = input.parentElement;
      const errorElement = formGroup.querySelector('.error-message');
      
      if (errorElement) {
        formGroup.removeChild(errorElement);
      }
      
      input.classList.remove('is-invalid');
    }
    
    function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    
    // Typing effect for hero section
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      let typed = new Typed('.typed', {
        strings: ['Software Engineer', 'Web Developer', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      });
    }
  });
  