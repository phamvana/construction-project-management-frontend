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