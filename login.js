// login.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = dataPengguna.find(u => u.email === email && u.password === password);

  if (user) {
    alert("Login berhasil!");
    localStorage.setItem("loggedEmail", user.email);
    window.location.href = "dashboard.html";
  } else {
    alert("Email/password yang anda masukkan salah!");
  }
});

// Modal Logic
const forgotModal = document.getElementById("forgotModal");
const registerModal = document.getElementById("registerModal");

const forgotBtn = document.getElementById("forgotPasswordBtn");
const registerBtn = document.getElementById("registerBtn");

const closeBtns = document.getElementsByClassName("close");

forgotBtn.onclick = () => forgotModal.style.display = "block";
registerBtn.onclick = () => registerModal.style.display = "block";

Array.from(closeBtns).forEach(btn => {
  btn.onclick = () => {
    forgotModal.style.display = "none";
    registerModal.style.display = "none";
  };
});

window.onclick = (event) => {
  if (event.target === forgotModal || event.target === registerModal) {
    forgotModal.style.display = "none";
    registerModal.style.display = "none";
  }
};
