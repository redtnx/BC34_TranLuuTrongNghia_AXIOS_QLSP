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
    </tr>
    `;
  });

  getEle("tblDanhSachSP").innerHTML = content;
}
