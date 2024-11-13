document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        alert(`Anda telah membeli ${productName}!`);
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
    this.reset(); // Mengosongkan formulir setelah pengiriman
});
let cart = [];

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        cart.push(productName); // Menambahkan produk ke keranjang
        alert(`Anda telah menambahkan ${productName} ke keranjang!`);
        updateCartCount(); // Memperbarui jumlah keranjang
    });
});

// Fungsi untuk memperbarui jumlah keranjang
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Menambahkan elemen untuk menampilkan jumlah keranjang di header
const header = document.querySelector('header');
const cartCountElement = document.createElement('span');
cartCountElement.id = 'cart-count';
cartCountElement.style.marginLeft = '10px';
cartCountElement.style.color = '#fff';
header.appendChild(cartCountElement);

// Menampilkan modal keranjang
const cartCountElement = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');
const cartItemsList = document.getElementById('cart-items');

cartCountElement.addEventListener('click', function() {
    updateCartItems();
    cartModal.style.display = 'block';
});

// Menutup modal ketika tombol close diklik
closeModal.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

// Menutup modal ketika pengguna mengklik di luar modal
window.addEventListener('click', function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Memperbarui daftar item keranjang
function updateCartItems() {
    cartItemsList.innerHTML = ''; // Mengosongkan daftar sebelumnya
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsList.appendChild(li);
    });
}

// Menangani tombol checkout (tambahkan logika sesuai kebutuhan)
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Fitur checkout belum tersedia.');
});

