var dataPengguna = [
    {
        id : 1,
        nama:"Rina Wulandari",
        email:"rina@ut.ac.id",
        password:"rina123",
        role:"UPBJJ-UT",
        lokasi:"UPBJJ Jakarta", 
    },
    {
        id : 2,
        nama:"Agus Pranoto",
        email:"agus@ut.ac.id",
        password:"agus123",
        role:"UPBJJ-UT",
        lokasi:"UPBJJ Makassar",
    },
    {
        id: 3,
        nama:"Siti Marlina",
        email:"siti@ut.ac.id",
        password:"siti123",
        role:"Puslaba",
        lokasi:"Pusat"
    },
    {
        id: 4,
        nama:"Doni Setiawan",
        email:"doni@ut.ac.id",
        password:"doni123",
        role:"Fakultas",
        lokasi:"FISHIP",
    },
    {
        id: 5,
        nama:"Admin SITTA",
        email:"admin@ut.ac.id",
        password:"admin123",
        role:"Administrator",
        lokasi:"Pusat",
    },
    {
        id: 6,
        nama:"Admin SITTA",
        email:"admin",
        password:"123",
        role:"Administrator",
        lokasi:"Pusat",
    },
];

const dataBahanAjar = [
    {
        KodeLokasi:"0jkt01",
        kodeBarang:"SKOM4101",
        namaBarang:"Pengantar Ilmu Komunikasi",
        jenisBarang:"BMP",
        edisi:"2",
        stok:"124",
        cover:"image/pengantar_komunikasi.jpg",
    },
    {
        kodeLokasi:"0MLG04",
        kodeBarang:"BIOL4223",
        namaBarang:"Mikrobiologi",
        jenisBarang:"BMP",
        edisi:"2",
        stok:"213",
        cover:"image/mikrobiologi.jpg",
    },
    {
        kodeLokasi:"0YKT04",
        kodeBarang:"PAUD4306",
        namaBarang:"Perkembangan dan Konsep Dasar Pengembangan Anak Usia Dini",
        jenisBarang:"BMP",
        edisi:"2",
        stok:"453",
        cover:"image/paud_perkembangan.jpg",
    },
    {
        kodeLokasi:"0BKS06",
        kodeBarang:"EKMA4213",
        namaBarang:"Manajemen Keuangan",
        jenisBarang:"BMP",
        edisi:"2",
        stok:"512",
        cover:"image/manajemen_keuangan.jpg",
    },
    {
        kodeLokasi:"0BGR00",
        kodeBarang:"ADPU4334",
        namaBarang:"Kepemimpinan",
        jenisBarang:"BMP",
        edisi:"2",
        stok:"155",
        cover:"image/kepemimpinan.jpg",
    },
];
const dataPengiriman = {
    2023001456: {
       nomorDO:"2023001456",
       nama:"Rina Wulandari",
       status:"Dalam Perjalanan",
       ekspedisi:"JNE",
       tanggalKirim:"24-08-2025",
       paket:"0MKJLG04",
       total:"Rp 180.000",
       perjalanan:[
        {
            waktu:"24-08-2025 11:13:22",
            keterangan:"Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
        },
        {
            waktu:"24-08-2025 13:17:49",
            keterangan:"Tiba di Hub: TANGERANG SELATAN",

        },
        {
            waktu:"24-08-2025 16:12:34",
            keterangan:"Diteruskanke kantor Jakarta Selatan",
        },
       ],
    },


    2023007123:{
    nomorDO:"2023007123",
    nama:"Agus Pronoto",
    status:"Dikirim",
    ekspedisi:"JNT",
    tanggalKirim:"26-08-2025",
    paket:"0KMRD344",
    total:"Rp. 241.000",
    perjalanan:[
        {
            waktu:"26-08-2025 13:34:22",
            keterangan:"Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",

        },
        {
            waktu:"26-08-2025 15:23:09",
            keterangan:"Tiba di Hub: TANGERANG SELATAN",

        },
        {
            waktu:"26-08-2025 16:57:33",
            keterangan:"Diteruskan ke Kantor Kota Bandung",
            
        },
        {
            waktu:"27-08-2025 09:34:21",
            keterangan:"Tiba di Hub: Kota Bandung",

        },
        {
            waktu:"27-08-2025 11:32:07",
            keterangan:"Proses antar ke Cimahi",

        },
        {
            waktu:"27-08-2025 14:55:28",
            keterangan:"Selesai Antar. Penerima Agus Pranoto",
        },
    ],

},
};