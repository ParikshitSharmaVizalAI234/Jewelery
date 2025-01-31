// Function to load HTML components
async function loadComponent(path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    return html;
  } catch (error) {
    console.error('Error loading component:', error);
    return '';
  }
}

// Initialize the application
async function initApp() {
  const app = document.getElementById('app');
  
  // Load components
  const navbar = await loadComponent('/src/components/NavBar.html');
  const hero = await loadComponent('/src/components/Hero.html');
  const products = await loadComponent('/src/components/Products.html');
  const footer = await loadComponent('/src/components/Footer.html');
  
  // Insert components into the page
  app.innerHTML = `
    ${navbar}
    ${hero}
    ${products}
    ${footer}
  `;

  // Initialize any JavaScript functionality
  initSlider();
}

// Initialize the slider functionality
function initSlider() {
  // Slider logic will go here
}

// Start the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp); 