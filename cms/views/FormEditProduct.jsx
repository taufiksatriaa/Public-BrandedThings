const EditProduct = () => {
  return (
    <>
      <div className="container mt-4">
        <section
          id="form-AddProduct"
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="container">
            <h1>Edit Product</h1>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
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
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
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
                      value={imgUrl}
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoryId" className="form-label">
                      Category
                    </label>
                    {/* <select
                      name="categoryId"
                      className="form-control"
                      id="categoryId"
                      onChange={(e) => {
                        setCategoryId(e.target.value);
                      }}
                    >
                      {category.map((el) => {
                        console.log(el.id);
                        return (
                          <option key={el.id} value={el.id}>
                            {el.name}
                          </option>
                        );
                      })}
                    </select> */}
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditProduct;
