new Vue({
  el: "#app",
  data: {
    upbjjList: window.dataBahanAjar.upbjjList,
    kategoriList: window.dataBahanAjar.kategoriList,
    stok: JSON.parse(JSON.stringify(window.dataBahanAjar.stok)),
    filterUpbjj: "",
    filterKategori: "",
    filterMenipis: false,
    filterKosong: false,
    editMode: false,
    editItemData: {},
    newItem: { kode: "", judul: "", kategori: "", upbjj: "", lokasiRak: "", qty: 0, safety: 0, harga: 0, catatanHTML: "" }
  },

  computed: {
    filteredStok() {
      return this.stok.filter(item => {
        const byUpbjj = this.filterUpbjj === "" || item.upbjj === this.filterUpbjj;
        const byKategori = this.filterKategori === "" || item.kategori === this.filterKategori;
        const byMenipis = !this.filterMenipis || item.qty < item.safety;
        const byKosong = !this.filterKosong || item.qty === 0;
        return byUpbjj && byKategori && byMenipis && byKosong;
      });
    }
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString("id-ID");
    },
    statusText(item) {
      if (item.qty === 0) return "<span class='text-danger'><i class='fas fa-times-circle'></i> Kosong</span>";
      if (item.qty < item.safety) return "<span class='text-warning'><i class='fas fa-exclamation-triangle'></i> Menipis</span>";
      return "<span class='text-success'><i class='fas fa-check-circle'></i> Aman</span>";
    },
    resetFilter() {
      this.filterUpbjj = "";
      this.filterKategori = "";
      this.filterMenipis = false;
      this.filterKosong = false;
    },
    editItem(item) {
      this.editMode = true;
      this.editItemData = Object.assign({}, item);
    },
    saveEdit() {
      const index = this.stok.findIndex(s => s.kode === this.editItemData.kode);
      if (index !== -1) {
        this.stok.splice(index, 1, this.editItemData);
        alert("Data berhasil diperbarui!");
      }
      this.editMode = false;
    },
    cancelEdit() {
      this.editMode = false;
    },
    addNew() {
      if (!this.newItem.kode || !this.newItem.judul) {
        alert("Kode dan Judul wajib diisi!");
        return;
      }
      this.stok.push({ ...this.newItem });
      alert("Data baru berhasil ditambahkan!");
      this.newItem = { kode: "", judul: "", kategori: "", upbjj: "", lokasiRak: "", qty: 0, safety: 0, harga: 0, catatanHTML: "" };
    }
  }
});
