// cari data tracking

document.getElementById("btnCari").addEventListener("click", function () {
  const noDO = document.getElementById("noDO").value.trim();
  const hasilTracking = document.getElementById("hasilTracking");
  const infoPesanan = document.getElementById("infoPesanan");
  const progressBar = document.getElementById("progressBar");
  const riwayatPerjalanan = document.getElementById("riwayatPerjalanan");

  // Ambil data dari dataBahanAjar.js
  const dataTracking = dataBahanAjar.tracking;

  // Cek apakah DO ditemukan
  const data = dataTracking[noDO];

  if (!data) {
    alert("Nomor DO tidak ditemukan!");
    hasilTracking.classList.add("hidden");
    return;
  }

  hasilTracking.classList.remove("hidden");

  // Tampilkan data dengan ikon
  infoPesanan.innerHTML = `
    <p><i class="fas fa-id-card"></i> <strong>NIM:</strong> ${data.nim}</p>
    <p><i class="fas fa-user"></i> <strong>Nama:</strong> ${data.nama}</p>
    <p><i class="fas fa-info-circle"></i> <strong>Status:</strong> ${data.status}</p>
    <p><i class="fas fa-truck-fast"></i> <strong>Ekspedisi:</strong> ${data.ekspedisi}</p>
    <p><i class="fas fa-calendar-alt"></i> <strong>Tanggal Kirim:</strong> ${data.tanggalKirim}</p>
    <p><i class="fas fa-box-open"></i> <strong>Paket:</strong> ${data.paket}</p>
    <p><i class="fas fa-money-bill-wave"></i> <strong>Total:</strong> Rp ${data.total.toLocaleString("id-ID")}</p>
  `;

  // Progress bar sesuai status
  let progressWidth = "0%";
  if (data.status === "Diproses") progressWidth = "20%";
  else if (data.status === "Dalam Perjalanan") progressWidth = "60%";
  else if (data.status === "Terkirim") progressWidth = "100%";
  progressBar.style.width = progressWidth;

  // Riwayat perjalanan
  riwayatPerjalanan.innerHTML = data.perjalanan
    .map(
      (r) =>
        `<li><i class="fas fa-location-dot"></i> <strong>${r.waktu}</strong> — ${r.keterangan}</li>`
    )
    .join("");
});


// tambah delivery order
// Elemen form
const fieldDO = document.getElementById("newDO");
const fieldNIM = document.getElementById("newNIM");
const fieldNama = document.getElementById("newNama");
const fieldEkspedisi = document.getElementById("newEkspedisi");
const fieldPaket = document.getElementById("newPaket");
const fieldTanggal = document.getElementById("newTanggal");
const fieldHarga = document.getElementById("newHarga");
const areaDetailPaket = document.getElementById("detailPaket");


// Generate Nomor DO
function generateNomorDO() {
  const tahun = new Date().getFullYear();

  const existing = Object.keys(dataBahanAjar.tracking)
    .filter((key) => key.startsWith(`DO${tahun}`))
    .length;

  const nomor = String(existing + 1).padStart(3, "0");
  return `DO${tahun}-${nomor}`;
}

fieldDO.value = generateNomorDO();



// Isi Dropdown Ekspedisi
function loadEkspedisi() {
  const daftarEkspedisi = ["REG", "EXP"];

  daftarEkspedisi.forEach((jenis) => {
    const opt = document.createElement("option");
    opt.value = jenis;
    opt.textContent = jenis;
    fieldEkspedisi.appendChild(opt);
  });
}
loadEkspedisi();


// Isi Dropdown Paket
function loadPaket() {
  dataBahanAjar.paket.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.kode;
    opt.textContent = `${p.kode} - ${p.nama}`;
    fieldPaket.appendChild(opt);
  });
}
loadPaket();


// Saat memilih paket → tampilkan detail + harga
fieldPaket.addEventListener("change", function () {
  const selected = dataBahanAjar.paket.find((p) => p.kode === this.value);

  if (!selected) {
    areaDetailPaket.innerHTML = "";
    fieldHarga.value = "";
    return;
  }

  let listIsi = selected.isi
    .map((i) => `<li><i class="fas fa-book"></i> ${i}</li>`)
    .join("");

  areaDetailPaket.innerHTML = `
    <h4>Isi Paket:</h4>
    <ul>${listIsi}</ul>
  `;

  fieldHarga.value = selected.harga.toLocaleString("id-ID");
});



// Simpan Delivery Order Baru ke dataBahanAjar
document.getElementById("btnSimpanDO").addEventListener("click", function () {
  const noDO = fieldDO.value;
  const nim = fieldNIM.value.trim();
  const nama = fieldNama.value.trim();
  const ekspedisi = fieldEkspedisi.value;
  const kodePaket = fieldPaket.value;
  const tanggal = fieldTanggal.value;

  if (!nim || !nama || !ekspedisi || !kodePaket || !tanggal) {
    alert("Semua field wajib diisi!");
    return;
  }

  const paketData = dataBahanAjar.paket.find((p) => p.kode === kodePaket);

  // Simpan ke object tracking
  dataBahanAjar.tracking[noDO] = {
    nim,
    nama,
    ekspedisi,
    status: "Diproses",
    paket: paketData.nama,
    tanggalKirim: tanggal,
    total: paketData.harga,
    perjalanan: [
      {
        waktu: tanggal,
        keterangan: "Pesanan diterima dan sedang diproses",
      },
    ],
  };

  alert("Delivery Order berhasil disimpan!");

  // Generate DO baru untuk input berikutnya
  fieldDO.value = generateNomorDO();

  // Reset form
  fieldNIM.value = "";
  fieldNama.value = "";
  fieldEkspedisi.value = "";
  fieldPaket.value = "";
  fieldHarga.value = "";
  areaDetailPaket.innerHTML = "";
});