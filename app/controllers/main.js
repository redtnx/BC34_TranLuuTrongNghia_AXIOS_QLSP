var service = new Services();

function getEle(id) {
  return document.getElementById(id);
}

function fetchData() {
  service
    .getListProduct()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchData();

function renderHTML(data) {
  var content = ``;

  data.forEach(function (product, index) {
    content += `
    <tr>
        <td>${index + 1}</td>
        <td>${product.tenSP}</td>
        <td>${product.gia}</td>
        <td>
            <img width="50px" src="./../../assets/img/${product.hinhAnh}">
        </td>
        <td>${product.moTa}</td>
        <td>
        <button class="btn btn-info" onclick="editProduct(${
          product.id
        })" data-toggle="modal" data-target="#myModal">Edit</button>

        <button class="btn btn-danger" onclick="deleteProduct(${
          product.id
        })">Xóa</button>
    </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = content;
}

// Xóa
function deleteProduct(id) {
  service
    .deleteProductApi(id)
    .then(function () {
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Thêm
getEle("btnThemSP").addEventListener("click", function () {
  // Sửa title
  document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm sản phẩm";
  // Tạo nút Add
  var btnAdd = `<button class = "btn btn-success" onclick="addProduct()">Add</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
});

function addProduct() {
  var tenSP = getEle("TenSP").value;
  var giaSP = getEle("GiaSP").value;
  var hinhSP = getEle("HinhSP").value;
  var moTa = getEle("MoTa").value;

  var product = new Product("", tenSP, giaSP, hinhSP, moTa);

  service
    .addProductApi(product)
    .then(function () {
      fetchData();
      // Tắt modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Sửa
function editProduct(id) {
  // Sửa title
  document.getElementsByClassName("modal-title")[0].innerHTML =
    "Cập nhật sản phẩm";
  // Tạo nút Update
  var btnUpdate = `<button class="btn btn-info" onclick="updateProduct(${id})")>Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

  service
    .getProduct(id)
    .then(function (result) {
      getEle("TenSP").value = result.data.tenSP;
      getEle("GiaSP").value = result.data.gia;
      getEle("HinhSP").value = result.data.hinhAnh;
      getEle("MoTa").value = result.data.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Update
function updateProduct(id) {
  var tenSP = getEle("TenSP").value;
  var giaSP = getEle("GiaSP").value;
  var hinhSP = getEle("HinhSP").value;
  var moTa = getEle("MoTa").value;

  var product = new Product(id, tenSP, giaSP, hinhSP, moTa);

  service
    .updateProductApi(product)
    .then(function () {
      fetchData();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
