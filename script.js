// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Sticky Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Hero Animation
const heroText = document.querySelector('.hero-text');
window.addEventListener('load', () => { if(heroText) heroText.classList.add('show'); });

// Blogs Data
const blogs = [
  { title: "AI Future: Kaise Machine Sochna Seekh Rahi Hai", img: "images/blog1.jpg", desc: "Artificial Intelligence ka future bohot promising hai...", link: "post1.html", category: "AI" },
  { title: "Cyber Security: Internet Ki Deewar", img: "images/blog2.jpg", desc: "Cyber Security aaj ke digital era me bohot important hai...", link: "post2.html", category: "Security" }
];

// Display Blogs
const blogGrid = document.getElementById('blogGrid');
function displayBlogs(blogArray){
  if(!blogGrid) return;
  blogGrid.innerHTML = "";
  blogArray.forEach(blog => {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    card.setAttribute('data-category', blog.category);
    card.innerHTML = `
      <img src="${blog.img}" alt="${blog.title}">
      <div class="blog-content">
        <h3>${blog.title}</h3>
        <p>${blog.desc}</p>
        <a href="${blog.link}" class="read-more">Read More</a>
      </div>
    `;
    blogGrid.appendChild(card);
  });
}
displayBlogs(blogs);

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(backToTop){
    if(window.scrollY > 300) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
  }
});
if(backToTop) backToTop.addEventListener('click', () => {
  window.scrollTo({ top:0, behavior:'smooth' });
});
