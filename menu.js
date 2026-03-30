// ================================================
// TÌM KIẾM - Đóng drawer khi nhấn Enter
// ================================================

function setupSearch() {
    // Lấy cả 2 ô input: trên navbar desktop và trong drawer mobile
    const inputs = document.querySelectorAll('.navbar-search input, .drawer-search input');

    inputs.forEach(input => {
        input.addEventListener('keydown', function (e) {
            if (e.key !== 'Enter') return;

            this.blur();

            // Đóng drawer khi tìm kiếm trên mobile
            if (window.innerWidth <= 1024) {
                document.getElementById('nav-mobile-input').checked = false;
            }
        });
    });
}

// Khởi chạy chức năng tìm kiếm
setupSearch();
