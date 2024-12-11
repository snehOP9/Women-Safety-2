document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'admin@wsa.com' && password === 'admin123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});
