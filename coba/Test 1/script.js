class User {
  constructor(a, b, c) {
    (this.nama = a), (this.katasandi = b), (this.role = c);
  }
}

var dataUser = [
  new User("hilmawan", "1234", "user"),
  new User("hafidzi", "123", "admin")
];

var dataUserLogin = {};

const LoginCLick = () => {
  var userlogin = document.getElementById("nama").value;
  var sandilogin = document.getElementById("katasandi").value;
  var login = false;
  for (var i = 0; i < dataUser.length; i++) {
    if (userlogin == dataUser[i].nama && sandilogin == dataUser[i].katasandi) {
      login = true;
      dataUserLogin = dataUser[i];
    }
  }

  if (login) {
    document.getElementsByTagName(
      "h2"
    )[0].innerHTML = `Selamat Datang User : ${dataUserLogin.nama}`;
    if (dataUserLogin.role == "admin") {
      document.getElementsByTagName(
        "h2"
      )[0].innerHTML = `Selamat Datang Admin : ${dataUserLogin.nama}`;

      document.getElementsByTagName(
        "h1"
      )[1].innerHTML = `Apa yang ingin kamu ubah/tambah?`;
      document.getElementsByTagName("p")[1].innerHTML = `<table>
            <thead>
                <tr>
                    <td>PRODUK</td> 
                    <td>HARGA</td>
                    <td>GAMBAR PRODUK</td>
                    <td>ACTION</td>
                </tr>
            </thead>
            <tbody> </tbody>
            <tfoot> 
            <tr>        
            <td><input type="text" class="addproduK" placeholder="Masukan Nama Produk"/></td>
            <td><input type="number" class="addproduK" placeholder="Masukan Harga"/></td>
            <td><input type="text" class="addproduK" placeholder="Masukan URL Gambar"></td>
            <td><button class="button1" onclick="addProduk()">Add Produk</button></td>
            </tr>
            </tfoot>
            </table>`;

      printProdukAdmin(listdata);
    } else {
      document.getElementsByTagName(
        "h1"
      )[1].innerHTML = `Apa yang ingin kamu beli?`;
      document.getElementsByTagName("p")[1].innerHTML = `<table>
            <thead>
                <tr>
                    <td>PRODUK</td> 
                    <td>HARGA</td>
                    <td>GAMBAR PRODUK</td>
                    <td>ACTION</td>
                </tr>
            </thead>
            <tbody> </tbody>  
            </table>`;
      document.getElementsByTagName(
        "h3"
      )[0].innerHTML = `Keranjang Masih Kosong`;
      printProduk(listdata);
      printCart(listCart);
    }
    document.getElementsByTagName(
      "p"
    )[0].innerHTML = `<button onclick="logoutuser()">Logout</button>`;
    document.getElementById("divlogin").innerHTML = ``;
  } else {
    document.getElementsByTagName(
      "h2"
    )[0].innerHTML = `user tidak ditemukan atau password salah`;
  }
};

const logoutuser = () => {
  dataUserLogin = {};
  document.getElementsByTagName("h2")[0].innerHTML = "";
  document.getElementsByTagName("h3")[0].innerHTML = "";
  document.getElementsByTagName("p")[0].innerHTML = ``;
  document.getElementById("divlogin").innerHTML = `<h1>Login & Register</h1>
<span>Username : <input type="text" id="nama"></span> <br> <br>
<span>Password : <input type="password" id="katasandi"></span> <br> <br>
<button onclick="register()">Register</button> <button onclick="LoginCLick()">Login</button>`;

  document.getElementsByTagName("h1")[1].innerHTML = ``;
  document.getElementsByTagName("p")[1].innerHTML = ``;
  document.getElementsByTagName("h3")[0].innerHTML = ``;
};

const register = () => {
  var userlogin = document.getElementById("nama").value;
  var katasandilogin = document.getElementById("katasandi").value;
  dataUser.push(new User(userlogin, katasandilogin, "user"));
  document.getElementsByTagName("h2")[0].innerHTML = "berhasil register";
};

// batas login & register

class List {
  constructor(a, b, c) {
    (this.produk = a), (this.harga = b), (this.gambar = c);
  }
}

var listdata = [
  new List(
    "Asus Zenbook UX 433",
    1500000,
    "http://static.techspot.com/images/products/2018/laptops/org/2018-12-17-product-15.jpg"
  ),
  new List(
    "Microsoft Surface Laptop 2",
    2000000,
    "https://cdn.shopify.com/s/files/1/0259/1735/products/microsoft_surface_laptop_black_gloss_skins_2048x.jpg?v=1564561599"
  ),
  new List(
    "Macbook Pro 2019",
    3000000,
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-201807?wid=892&hei=820&&qlt=80&.v=1529520056377"
  )
];

const printProduk = a => {
  var output = "";
  a.forEach((val, index) => {
    output += `<tr>
            <td>${val.produk}</td>
            <td>${val.harga}</td>
            <td> <img src=${val.gambar} height='100px'/> </td>
            <td><button class="addcart" onclick="onAddCartClick(${index})">Add to Cart</button></td>           
        </tr>`;
  });
  document.getElementsByTagName("tbody")[0].innerHTML = output;
};

const printProdukAdmin = a => {
  var output = "";
  a.forEach((val, index) => {
    output += `<tr>
            <td>${val.produk}</td>
            <td>${val.harga}</td>
            <td> <img src=${val.gambar} height='100px'/> </td>
            <td>
                <button class="addcart" onclick="DeleteClick(${index})">Delete</button>
                <button class="addcart" onclick="EditClick(${index})">Edit</button> 
            </td>              
        </tr>`;
  });
  document.getElementsByTagName("tbody")[0].innerHTML = output;
};

var listCart = [];
const printCart = a => {
  var output = "";
  jumlah = 0;
  totalcart = 0;
  a.forEach((val, index) => {
    output += `<tr>
            
            <td>${val.produk}</td>
            <td>${val.harga}</td>
            <td><img src=${val.gambar} height='100px'/></td>
            <td><button onclick="onDeleteClick(${index})">delete</button></td>
            </tr>`;
    jumlah++;
    totalcart += val.harga;
  });
  document.getElementsByTagName("tbody")[1].innerHTML = output;
  if (jumlah !== 0) {
    document.getElementsByTagName(
      "h3"
    )[0].innerHTML = `Item Belanja Anda ${jumlah} `;
    document.getElementById(
      "textlist"
    ).innerHTML = `Total belanja anda sebesar Rp. ${totalcart}`;
    document.getElementById(
      "checkout"
    ).innerHTML = `<button onclick="MariCheckOut(),start()">Checkout</button>`;
  } else {
    document.getElementsByTagName("h3")[0].innerHTML = `Keranjang Masih Kosong`;
    document.getElementById("textlist").innerHTML = ``;
  }
};

const onAddCartClick = index => {
  var addCheck = confirm("anda yakin memilih ini?");
  var head = "";

  if (addCheck == true) {
    head = `<tr>
                    <td>PRODUK</td> 
                    <td>HARGA</td>
                    <td>GAMBAR PRODUK</td>
                    <td>ACTION</td>
            </tr>`;
    document.getElementsByTagName("thead")[1].innerHTML = head;
    listCart.push(listdata[index]);
  }
  printCart(listCart);
};

const onDeleteClick = index => {
  var deleteCheck = confirm("Yakin mau delete barang ini?");
  var head = "";

  if (deleteCheck == true) {
    if (listCart.length == 1) {
      document.getElementsByTagName("thead")[1].innerHTML = head;
      document.getElementById("Checkout").innerHTML = "";
    }
    listCart.splice(index, 1);
  }
  printCart(listCart);
};

const MariCheckOut = () => {
  document.getElementById(
    "bayarAkhir"
  ).innerHTML = `<input type="number" placeholder="silahkan bayar" id="inputbayar"><button onclick="bayarAkhir()">Pay</button>`;
};

const jumlahHarga = k => {
  var output = 0;
  for (i = 0; i < k.length; i++) {
    output += k[i]["harga"];
  }
  return output;
};

const bayarAkhir = () => {
  if (document.getElementById("inputbayar").value < jumlahHarga(listCart)) {
    alert("Uangmu ga cukup ");
  } else if (
    document.getElementById("inputbayar").value >= jumlahHarga(listCart)
  ) {
    clearInterval(timer);
    alert(
      "Terima Kasih telah belanja di toko kami. Dan ini kembalian anda. Rp: " +
        (document.getElementById("inputbayar").value - jumlahHarga(listCart))
    );
    listCart = [];
    document.getElementsByTagName("h3")[0].innerHTML = ``;
    document.getElementById("textlist").innerHTML = ``;
    document.getElementsByTagName("thead")[1].innerHTML = "";
    document.getElementsByTagName("tbody")[1].innerHTML = "";
    document.getElementById("checkout").innerHTML = "";
    document.getElementById("bayarAkhir").innerHTML = "";
    document.getElementById("timer").innerHTML = "";

    time = 30;
  }
};

var time = 30;
var timer;
function start() {
  time = time + 1;
  timer = setInterval(waktu, 1000);
}
function waktu() {
  time -= 1;
  document.getElementById("timer").innerHTML = `waktu tersisa ${time}`;
  if (time <= 0) {
    clearInterval(timer);
    alert("Waktu checkout habis");
    listCart = [];
    document.getElementsByTagName("h3")[0].innerHTML = ``;
    document.getElementById("textlist").innerHTML = ``;
    document.getElementsByTagName("thead")[1].innerHTML = "";
    document.getElementsByTagName("tbody")[1].innerHTML = "";
    document.getElementById("checkout").innerHTML = "";
    document.getElementById("bayarAkhir").innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    time = 30;
  }
}

const DeleteClick = index => {
  var chekDelete = confirm("Yakin mau delete barang ini?");
  var head = "";

  if (chekDelete == true) {
    listdata.splice(index, 1);
  }
  printProdukAdmin(listdata);
};

const EditClick = index => {
  var editProduk = prompt("Masukan nama produk yang baru");
  var editHarga = parseInt(prompt("Masukan Harga yang baru"));
  var editGambar = prompt("Masukan URL gambar yang baru");

  listdata[index].produk = editProduk;
  listdata[index].harga = editHarga;
  listdata[index].gambar = editGambar;
  printProdukAdmin(listdata);
};

const addProduk = () => {
  var addCheck = confirm("Yakin Mau nambah produk ini?");
  if (addCheck == true) {
    var input = document.getElementsByClassName("addproduK");
    var produkBaru = input[0].value;
    var hargaBaru = parseInt(input[1].value);
    var imageBaru = input[2].value;
    listdata.push(new List(produkBaru, hargaBaru, imageBaru));
  }
  printProdukAdmin(listdata);
};
