import { useNavigate, useParams } from "react-router-dom";

const Card = ({ product }) => {
  // console.log(product, "iniii");
  // console.log(products);
  const imageStyle = {
    width: "100%", // Mengatur lebar gambar menjadi 100% dari parent
    height: "300px", // Mengatur tinggi gambar sesuai kebutuhan Anda
  };
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/pub/product/${id}`);
  };
  return (
    <>
      {/* // console.log(product); */}
      <div className="col-md-4">
        <div className="card text-white bg-dark mb-3" key={product.id}>
          <img
            src={product.imgUrl}
            style={imageStyle}
            className="product-image"
            alt={product.name}
          />
          <div className="product-details">
            <h5 className="product-title">{product.name}</h5>
            <p className="product-price">Price: Rp. {product.price}</p>
          </div>
          <button
            key={product.id}
            onClick={() => {
              handleClick(product.id);
            }}
            className="btn btn-primary"
          >
            See Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
