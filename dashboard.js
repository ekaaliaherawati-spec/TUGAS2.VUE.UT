function goTo(page) {
  window.location.href = page;
}

function logout() {
  if (confirm("Apakah Anda yakin ingin logout?")) {
    window.location.href = "login.html";
  }
}

// Greeting dinamis
window.onload = () => {
  const greetingMsg = document.getElementById("greetingMsg");
  const timeInfo = document.getElementById("timeInfo");

  // Ambil nama/email user yang login
  const loggedEmail = localStorage.getItem("loggedEmail");
  let loggedUser = "Pengguna";

  // 🔹 Cari user di dataPengguna berdasarkan email login
  if (typeof dataPengguna !== "undefined" && loggedEmail) {
    const user = dataPengguna.find(u => u.email === loggedEmail);
    if (user) {
      loggedUser = user.nama;
    }
  }
  
  // Tentukan waktu (pagi/siang/sore/malam)
  const now = new Date();
  const hour = now.getHours();

  let greetingText = "";
  let icon = "";

  if (hour >= 5 && hour < 11) {
    greetingText = "Selamat Pagi";
    icon = "🌅";
  } else if (hour >= 11 && hour < 15) {
    greetingText = "Selamat Siang";
    icon = "☀️";
  } else if (hour >= 15 && hour < 18) {
    greetingText = "Selamat Sore";
    icon = "🌇";
  } else {
    greetingText = "Selamat Malam";
    icon = "🌙";
  }

  greetingMsg.textContent = `${icon} ${greetingText}, ${loggedUser}!`;

  // Tampilkan jam lokal dan update tiap detik
  function updateTime() {
    const date = new Date();
    const jam = String(date.getHours()).padStart(2, "0");
    const menit = String(date.getMinutes()).padStart(2, "0");
    const detik = String(date.getSeconds()).padStart(2, "0");
    timeInfo.textContent = `Sekarang pukul ${jam}:${menit}:${detik} WIB`;
  }

  updateTime();
  setInterval(updateTime, 1000);
};

// login.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Simpan user login ke localStorage
    localStorage.setItem("loggedUser", email);

    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } else {
    alert("Email/password yang anda masukkan salah!");
  }
});
