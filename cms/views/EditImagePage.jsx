import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReusableButton from "../src/Components/ReusableButton";
import { urlName } from "../src/static";
const EditImage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [imageFile, setImageFile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const inputImageFileHandler = (event) => {
    const inputImageFile = event.target.files[0];
    setImageFile(inputImageFile);
  };
  const access_token = localStorage.getItem("access_token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("imgUrl", imageFile);

      const response = await axios.patch(
        `${urlName}product/${productId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="bg-secondary">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <form className="bg-white p-4 rounded">
          <div className="text-center">
            <label htmlFor="uploadImage" className="form-label text-black">
              Upload Image
            </label>
            <input
              type="file"
              className="form-control"
              id="uploadImage"
              onChange={inputImageFileHandler}
            />
          </div>
          <div className="mt-3">
            <ReusableButton
              onClick={handleSubmit}
              type="submit"
              className="btn-primary"
              label="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditImage;
