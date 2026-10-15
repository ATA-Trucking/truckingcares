document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item--expanded');
  
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        const submenu = this.querySelector('.menu');
        if (submenu) {
          submenu.style.display = 'block';
        }
      });
  
      item.addEventListener('mouseleave', function () {
        const submenu = this.querySelector('.menu');
        if (submenu) {
          submenu.style.display = 'none';
        }
      });
    });
  });
  