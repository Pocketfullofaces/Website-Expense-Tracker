let lelelel = [];

const pengeluaran = document.getElementById("pengeluaran");
const namatransaksi = document.getElementById("namatransaksi");
const nominal = document.getElementById("nominal");
const list = document.getElementById("list");
const data = document.getElementById("data");
const totalzzzz = document.getElementById("totalzzzz");
const kosong = document.getElementById("kosong");

pengeluaran.addEventListener("submit", function (e) {
    e.preventDefault();

    const namaT = namatransaksi.value.trim();
    const jumlahT = Number(nominal.value);

    if (!namaT || !jumlahT || jumlahT <= 0) return;

    lelelel.push({ name: namaT, amount: jumlahT });

    namatransaksi.value = "";
    nominal.value = "";

    render();
});

function deleteExpense(index) {
    lelelel.splice(index, 1);
    render();
}

function render() {
    list.innerHTML = "";

    if (lelelel.length === 0) {
        kosong.style.display = "block";
    }else{
        kosong.style.display = "none";
    }

    lelelel.forEach(function (expense, index) {
        const li = document.createElement("li");

        li.innerHTML =
            '<span class="namaItem">' + expense.name + '</span>' +
            '<span class="jumlahItem">Rp ' + expense.amount.toLocaleString("id-ID") + '</span>' +
            '<button class="buttonHapus" onclick="deleteExpense(' + index + ')">Delete</button>';

        list.appendChild(li);
    });

    const total = lelelel.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);

    data.textContent = lelelel.length;
    totalzzzz.textContent = total.toLocaleString("id-ID");
}