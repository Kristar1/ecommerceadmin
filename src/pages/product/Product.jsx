import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethod";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
 
export default function Product() {
  const location = useLocation();
  const productId =  location && location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const navigate = useNavigate();

  console.log(productId);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const [inputs, setInputs] = useState({
    title: product?.title,
    price: product?.price,
    desc: product?.desc,
    inStock: product?.inStock,
    _id: product?._id,
  });
  const [cat, setCat] = useState(product?.categories);
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [url, setUrl] = useState(product?.img);
  const [url2, setUrl2] = useState(product?.img2);
  const [url3, setUrl3] = useState(product?.img3);
  const [url4, setUrl4] = useState(product?.img4);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategories = (e) => {
    setCat(e.target.value.split(","));
  };

  // console.log(inputs,cat)
  // console.log(product)

  const fileChange = (e) => {
    setFile(e.target.files[0]);

    const fileName = new Date().getTime() + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          console.log(url);
        });
      }
    );
  };
  const fileChange2 = (e) => {
    setFile2(e.target.files[0]);
    console.log(file2)

    const fileName = new Date().getTime() + file2?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file2);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl2(downloadURL);
          console.log(url2);
        });
      }
    );
  };
  const fileChange3 = (e) => {
    setFile3(e.target.files[0]);
    console.log(file3)


    const fileName = new Date().getTime() + file3?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file3);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl3(downloadURL);
          console.log(url3);
        });
      }
    );
  };
  const fileChange4 = (e) => {
    setFile4(e.target.files[0]);
    console.log(file4)

    const fileName = new Date().getTime() + file4?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file4);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl4(downloadURL);
          console.log(url4);
        });
      }
    );
  };

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...inputs,
      img: url,
      img2: url2,
      img3: url3,
      img4: url4,
      categories: cat,
    };
    console.log(updatedProduct);
    updateProduct(productId, updatedProduct, dispatch);
    // navigate('/adminpanel/products')
  };

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);

        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <div className="Adminproduct">
      <div className="AdminproductTitleContainer">
        <h1>Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="AdminproductTop">
        <div className="AdminproductTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="AdminproductTopRight">
          <div className="AdminproductInfoTop">
            <img src={product?.img} alt="" className="AdminproductInfoImg" />
            <span className="AdminproductName">{product?.title}</span>
          </div>
          <div className="AdminproductInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">price:</span>
              <span className="productInfoValue">{product?.price}</span>
            </div>
            <div className="AdminproductInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
              </div>

              <div className="AdminproductInfoItem">
                <span className="productInfoKey">
                  id: <span></span>{" "}
                </span>
                <span className="AdminproductInfoValue"> {product?._id}</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">
                  {product?.inStock ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AdminproductBottom">
        <form className="AdminproductForm">
          <div className="AdminproductFormLeft">
            <label>Product Name</label>
            <input
              name="title"
              type="text"
              placeholder={product?.title}
              onChange={handleChange}
            />
            <label>Price</label>
            <textarea
              name="desc"
              type="text"
              placeholder={product?.desc}
              onChange={handleChange}
            />
            <input
              name="price"
              type="number"
              placeholder={product?.price}
              onChange={handleChange}
            />
            <label>Description</label>
            <label>Categories</label>
            <input
              type="text"
              placeholder={product?.categories}
              onChange={handleCategories}
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="AdminproductFormRight">
            <div className="AdminproductUploadWrapper">
              <div className="AdminproductUpload">
                <img src={url} alt="" className="AdminproductUploadImg" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={fileChange}
                />
              </div>
              <div className="AdminproductUpload">
                <img src={url2} alt="" className="AdminproductUploadImg" />
                <label htmlFor="file2">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="file2"
                  style={{ display: "none" }}
                  onChange={fileChange2}
                />
              </div>
              <div className="AdminproductUpload">
                <img src={url3} alt="" className="AdminproductUploadImg" />
                <label htmlFor="file3">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="file3"
                  style={{ display: "none" }}
                  onChange={fileChange3}
                />
              </div>
              <div className="AdminproductUpload">
                <img src={url4} alt="" className="AdminproductUploadImg" />
                <label htmlFor="file4">
                  <Publish />
                </label>
                <input
                  type="file"
                  id="file4"
                  style={{ display: "none" }}
                  onChange={fileChange4}
                />
              </div>
            </div>
            <button className="AdminproductButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
