import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@mui/material";
import { productDetailsPath } from "../../Helper/Helper";
import { showProductList, deleteProduct } from "../../Redux/ProductSlice";
import { Link } from "react-router-dom";

import SweetAlertComponent from "../SweetAlert/SweetAlert";

export default function ProductDet() {
  const dispatch = useDispatch();
  const { list, totalpage } = useSelector((state) => state.proContent);
  const [totalRecords, setPage] = useState();
  const [delete_id, setDelete_id] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    dispatch(showProductList());
  }, []);

  const handleChange = (item, pageno) => {
    setPage(pageno);
    dispatch(
      showProductList({
        page: pageno,
        perpage: 10,
      })
    );
  };

  // const delete_func = (id) => {
  //     if(delete_id !== null){
  //       dispatch(deleteProduct(delete_id)).then(()=>{
  //         dispatch(showProductList());
  //       })
  //     }
  //     setDelete_id("");
  //     setIsDelete(false);
  // };
  const delete_func = (id) => {
    if (delete_id !== "") {
      dispatch(
        deleteProduct({
          id: delete_id,
        })
      ).then(() => {
        dispatch(showProductList());
      });
    }

    setDelete_id("");
    setIsDelete(false);
  };
  return (
    <React.Fragment>
      <div className="about_us_block position-relative">
        <div className="about_us_block_banner about_us_block_overlay position-relative">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 ">
                <div className="col-header-about">
                  <h2 className="fw-bold text-capitalize">Custom Products</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_bakery p-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_bakery_content">
                <h2 className="position-relative">
                  Top Custom Products Of This Week. Hurry Up!! You Can Also
                  Share Your Customized Recipes With Us.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/prodet1.jpg"
                  alt="latest-item"
                />
                <h6>Cream filled doughnut</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/prodet2.jpg"
                  alt="latest-item"
                />
                <h6>Chocolate Croissant</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/prodet3.jpg"
                  alt="latest-item"
                />
                <h6>Chocolate Cupcake</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="latest-item">
                <img
                  className="img-fluid"
                  src="/images/prodet4.jpg"
                  alt="latest-item"
                />
                <h6>Crusty Milk Bread</h6>
                <p>Lorem ipsum dolor amet, consetec adipiscing elit. magna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_bakery p-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_bakery_content">
                <h2 className="position-relative">Check Our Custom Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="productDataBox-outer col-lg-12">
            {list?.map((item) => {
              return (
                <>
                  <div className="productDataBox-inner">
                    <div className="productDataBox">
                      <h5>{item?.title}</h5>
                      <p>{item?.description}</p>
                      {/* <div><img className="img-fluid" src={item?.image ? productDetailsPath(item?.image) : "error"} alt="product" />
                            </div> */}
                      <div>
                        <img
                          className="productdataimage"
                          src="/images/feature-3.jpg"
                          alt="product"
                        />
                      </div>
                      <div className="ed-del-button d-flex justify-content-center align-items-center">
                        <Link
                          to={`/product/detail/${item?._id}`}
                          className="btn btn-edit"
                        >
                          Edit
                        </Link>
                        <Link
                          to=""
                          onClick={() => {
                            setDelete_id(item?._id);
                            setIsDelete(true);
                          }}
                          className="btn btn-edit"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {isDelete && (
              <SweetAlertComponent
                confirm={delete_func}
                cancel={() => setIsDelete(false)}
                title={"Are you sure?"}
                subtitle={"You will not be able to recover"}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="pagination">
              <Pagination
                count={totalpage}
                onChange={handleChange}
                totalRecords={totalRecords}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
