const AddProduct = () => {
  return (
    <>
      <section
        id="form-AddProduct"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <h1>Add Product</h1>
          <div className="card">
            <div className="card-body">
              <form action="process-add-product.php" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    name="stock"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imgUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imgUrl"
                    name="imgUrl"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoryId" className="form-label">
                    Category ID
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="categoryId"
                    name="categoryId"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="authorId" className="form-label">
                    Author ID
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="authorId"
                    name="authorId"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
