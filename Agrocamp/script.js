document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simulate loading news data
  setTimeout(() => {
    const newsGrid = document.querySelector('.news-grid');
    if (newsGrid) {
      const loadingIndicator = document.createElement('p');
      loadingIndicator.textContent = 'Loading more news...';
      newsGrid.appendChild(loadingIndicator);
      
      setTimeout(() => {
        loadingIndicator.remove();
        const newArticle = document.createElement('article');
        newArticle.className = 'news-card';
        newArticle.innerHTML = `
          <h3>New Dairy Farming Regulations</h3>
          <p>Updated animal welfare standards to be implemented next quarter...</p>
          <a href="#">Read more</a>
        `;
        newsGrid.appendChild(newArticle);
      }, 1500);
    }
  }, 2000);
});
