
    document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.querySelector('.toggle-btn');

        function toggleSidebar() {
            sidebar.classList.toggle('show');
        }

        function closeSidebar(event) {
            if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
                sidebar.classList.remove('show');
            }
        }

        toggleBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Mencegah event dari menutup sidebar saat toggle diklik
            toggleSidebar();
        });

        document.addEventListener("click", closeSidebar);
    });
