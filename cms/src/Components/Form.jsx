import ReusableButton from "./ReusableButton";

const Form = ({
  name,
  description,
  price,
  stock,
  imgUrl,
  categoryId,
  category,
  setName,
  setDescription,
  setPrice,
  setStock,
  setImgUrl,
  setCategoryId,
  handleSubmit,
}) => {
  return (
    <>
      <form>
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
            onChange={(e) => setDescription(e.target.value)}
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
          <select
            name="categoryId"
            className="form-control"
            id="categoryId"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {category.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-grid gap-2">
          <ReusableButton
            onClick={handleSubmit}
            type="submit"
            className="btn-primary"
            label="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
