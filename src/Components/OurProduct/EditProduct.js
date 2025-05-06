import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {editProductList, editProductData} from "../../Redux/ProductSlice";

export default function EditProduct() {
  const {Editlist} = useSelector((state) => state.proContent);  
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editProductList(id))
  }, [id]); 
  const [user, setUser] = useState({
    title:"",
    description:"",
  });

  const [img, setimg] = useState("");

  const [error, setError] = useState({});
  const validation = () => {
    let error = {};
    if(!user.title){
        error.title = "Title is Required";
    }
    if(!user.description){
        error.description = "Description is Required";
    }
    return error;
  }
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: "Title is Required" });
        setUser({ ...user, title: "" });
      } else {
        setError({ ...error, title: "" });
        setUser({ ...user, title: value });
      }
    }

    if (name === "description") {
      if (value.length === 0) {
        setError({ ...error, description: "Description is Required" });
        setUser({ ...user, description: "" });
      } else {
        setError({ ...error, description: "" });
        setUser({ ...user, description: value });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let data={
        "title":user.title,
        "description":user.description,
        "image":img,
        "id":id,
    }
    dispatch(editProductData(data));
    // let formData = new FormData();
    // formData.append("title", user.title);
    // formData.append("description", user.description);
    // formData.append("image", img);
    // formData.append("id", id);
    
  }
  useEffect(() => {
    if(Editlist !== null){
        setUser({
            title:Editlist?.title,
            description:Editlist?.description,
            image:Editlist?.img,
           
        })
    }
  }, [Editlist])
  return (
    <>
     <div className="about_us_block position-relative">
        <div className="about_us_block_banner about_us_block_overlay position-relative">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 ">
                <div className="col-header-about">
                  <h2 className="fw-bold text-capitalize">Our Products</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_bakery p-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_bakery_content">
                <h2 className="position-relative">Check Our Wide Ranges</h2>
              </div>
            </div>
          </div>
          <div className="row product_image">
            <div className="col-lg-4 col-md-4 col-12">
              <div className=" position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-1.jpg"
                  alt="bakery"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className=" position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-2.jpg"
                  alt="bakery"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className=" position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-3.jpg"
                  alt="bakery"
                />
              </div>
            </div>
          </div>
          <div className="row product_image my-4">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-4.jpg"
                  alt="bakery"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-5.jpg"
                  alt="bakery"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className=" position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-6.jpg"
                  alt="bakery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about_bakery_content">
              <h2 className="position-relative">
                Share Your Creative Idea With Us To Create More Awesome Products
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="signin__form product__form position-relative">
              <form>
                <div class="form-group">
                  <div>
                    <label for="exampleInputEmail1">Product Title</label>
                    <input
                      class="form-control"
                     
                      name="title"
                      value={user.title}
                      onChange={(e) => postUserData(e)}
                    />
                    <span style={{ color: "red", textAlign: "center" }}>
                      {" "}
                      {error?.title}{" "}
                    </span>
                  </div>

                  <div>
                    <label for="exampleInputEmail1">Product Description</label>
                    <input
                      class="form-control"
                     
                      name="description"
                      value={user.description}
                      onChange={(e) => postUserData(e)}
                    />
                    <span style={{ color: "red", textAlign: "center" }}>
                      {" "}
                      {error?.description}{" "}
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <label>Product Image</label>
                  <input
                    type="file"
                    onChange={(e) => setimg(e.target.files[0])}
                    name="img"
                    accept="image/*"
                  />
                  <span style={{ color: "red", textAlign: "center" }}>
                    {" "}
                    {error?.img}{" "}
                  </span>
                </div>
                <button
                  type="submit"
                  class="btn btn-login"
                  onClick={Submit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="createpro">
              <img
                className="img-fluid"
                src="/images/createproduct.png"
                alt="cake"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
