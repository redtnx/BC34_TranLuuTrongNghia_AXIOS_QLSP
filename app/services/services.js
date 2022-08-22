function Services() {
  this.getListProduct = function () {
    return axios({
      url: "https://62ff793c9350a1e548df750f.mockapi.io/api/Products",
      method: "GET",
    });
  };

  this.deleteProductApi = function (id) {
    return axios({
      url: `https://62ff793c9350a1e548df750f.mockapi.io/api/Products/${id}`,
      method: "DELETE",
    });
  };

  this.addProductApi = function (product) {
    return axios({
      url: "https://62ff793c9350a1e548df750f.mockapi.io/api/Products",
      method: "POST",
      data: product,
    });
  };

  this.getProduct = function (id) {
    return axios({
      url: `https://62ff793c9350a1e548df750f.mockapi.io/api/Products/${id}`,
      method: "GET",
    });
  };

  this.updateProductApi = function (product) {
    return axios({
      url: `https://62ff793c9350a1e548df750f.mockapi.io/api/Products/${product.id}`,
      method: "PUT",
      data: product,
    });
  };
}
