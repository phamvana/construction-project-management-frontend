'use strict';
/**
 * Toggle Sidebar
 */
const sidebarToggle = document.getElementById('sidebar-title');
sidebarToggle.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    // console.log('Sidebar toggle clicked');
});


/* =========================
LOAD PAGE (SPA đơn giản)
========================= */
const menuItems = document.querySelectorAll('.menu-item');
const mainContent = document.getElementById('main-content');

menuItems.forEach(item => {
item.addEventListener('click', function () {
// Active menu
menuItems.forEach(i => i.classList.remove('active'));
this.classList.add('active');


    const page = this.getAttribute('data-page');

    // Load HTML vào main-content
    fetch('pages/' + page)
        .then(res => res.text())
        .then(html => {
            mainContent.innerHTML = html;

            // Sau khi load xong thì render data nếu là trang projects
            if (page === 'projects.html') {
                setTimeout(() => {
                    if (typeof renderProjects === 'function') {
                        renderProjects();
                    }
                }, 100);
            }
        })
        .catch(err => {
            mainContent.innerHTML = "<p>Lỗi load trang!</p>";
            console.error(err);
        });
});


});


