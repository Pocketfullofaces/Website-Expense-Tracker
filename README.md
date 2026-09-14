# Website-Expense-Tracker
Assignment Frontend Programming (Juan Wangsa Hadisurya - 535250131)

Hasil project ini adalah sebuah website expense tracker untuk melacak pengeluaran. Saya mendesain web tersebut dengan inspirasi dari ui Discord dan Odysseus by Pewdiepie. Web tersebut dapat digunakan untuk menginput data pengeluaran (namanya dan nominal pengeluarannya) dan menghitung total pengeluarannya, selain itu web juga bisa menghitung berapa banyak jumlah data yang telah diinput. Jika terjadi kesalahan, data yang diinput juga bisa dihapus. 

Cara kerja web : 
1. Ketika pengguna menginput data, data disimpan sebagai satu objek {namaT, jumlahT} di array dalam JS (lelelel). 
2. Saat form disubmit, JS mengambil nilai dari input nama dan nominal, memvalidasi supaya tidak kosong dan nominal lebih dari 0, lalu memasukkan data tersebut ke dalam array lelelel.
3. Fungsi render() mengosongkan <ul>, lalu membuat ulang satu <li> untuk setiap item di dalam array lelelel.