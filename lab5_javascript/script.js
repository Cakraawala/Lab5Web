// Praktikum 5: JavaScript Dasar dan Manipulasi HTML
// Nama : Angger Cakra Wicaksono
// NIM  : 312510054
// Kelas: I253A

// ========================================================
// Latihan 1: Menampilkan output
// ========================================================
document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan output pada elemen pesan dan console
    var elemenPesan = document.getElementById("pesan");
    if (elemenPesan) {
        elemenPesan.textContent = "Hello World";
    }
    console.log("Hello World");

    // Menjalankan operasi dasar bawaan modul pada console
    operasiDasar(9, 4);

    // Inisialisasi event listener checkbox menu makanan (Latihan 8)
    var daftarMenu = document.querySelectorAll(".menu");
    daftarMenu.forEach(function (item) {
        item.addEventListener("change", hitungTotal);
    });
});

// ========================================================
// Latihan 2: Alert dan prompt
// ========================================================
function jalankanLatihan2() {
    const namaPengguna = prompt("Masukkan nama Anda:", "");
    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");
    }
}

// ========================================================
// Latihan 3: Function dan operasi aritmetika
// ========================================================
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);

    // Tampilkan di halaman jika elemen penampung ada
    var logBox = document.getElementById("logAritmetika");
    if (logBox) {
        logBox.innerHTML =
            "Penjumlahan: " + (a + b) + "<br>" +
            "Pengurangan: " + (a - b) + "<br>" +
            "Perkalian: " + (a * b) + "<br>" +
            "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol") + "<br>" +
            "Modulus: " + (a % b);
    }
}

// ========================================================
// Latihan 4: Seleksi kondisi if-else
// ========================================================
function jalankanLatihan4() {
    const inputNilai = prompt("Masukkan nilai (0-100):");
    const nilaiMahasiswa = Number(inputNilai);

    if (inputNilai === null || inputNilai.trim() === "" ||
        Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// ========================================================
// Latihan 5: Seleksi kondisi switch
// ========================================================
function jalankanLatihan5() {
    const inputPilihan = prompt("Masukkan angka 1-5:");
    switch (inputPilihan) {
        case "1":
            alert("Bilangan satu");
            break;
        case "2":
            alert("Bilangan dua");
            break;
        case "3":
            alert("Bilangan tiga");
            break;
        case "4":
            alert("Bilangan empat");
            break;
        case "5":
            alert("Bilangan lima");
            break;
        default:
            alert("Pilihan tidak tersedia");
    }
}

// ========================================================
// Latihan 6: Form bilangan genap atau ganjil
// ========================================================
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// ========================================================
// Latihan 7: Mengubah warna halaman
// ========================================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// ========================================================
// Latihan 8: DOM dan checkbox menu makanan
// ========================================================
function hitungTotal() {
    let total = 0;
    const daftarMenu = document.querySelectorAll(".menu");
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
