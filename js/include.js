document.addEventListener('DOMContentLoaded', function() {
    // Load Header
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Load Footer
    fetch('../includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});