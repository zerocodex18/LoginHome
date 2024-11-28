// JavaScript untuk Show Password
const togglePassword = document.querySelector("#togglePassword");
const passwordField = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // Toggle tipe input antara password dan text
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Toggle ikon mata
    this.classList.toggle("bi-eye-fill");
    this.classList.toggle("bi-eye-slash-fill");
});

// Menampilkan Toast setelah tombol login diklik
const loginButton = document.querySelector("#loginButton");
const toastElementSuccess = document.getElementById("loginToast");
const toastElementError = document.getElementById("errorToast");

// Login form
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginButton.addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah form submit agar Toast bisa muncul

    // Simulasi pengecekan login (misalnya mengecek email dan password)
    const email = emailInput.value;
    const password = passwordInput.value;

    // Login sederhana (ganti dengan autentikasi nyata jika perlu)
    if (email === "bacotbrotherhood12@gmail.com" && password === "fajar123") {
        // Login berhasil, tampilkan Toast Berhasil
        const toastSuccess = new bootstrap.Toast(toastElementSuccess);
        toastSuccess.show();
    } else {
        // Login gagal, tampilkan Toast Gagal dengan kelas toast-error
        toastElementError.classList.add("toast-error");  // Menambahkan kelas toast-error
        const toastError = new bootstrap.Toast(toastElementError);
        toastError.show();
    }
});
