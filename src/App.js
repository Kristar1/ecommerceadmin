import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import "./index.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login";
import { useDispatch, useSelector } from 'react-redux'
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";


function App() {
  let admin = useSelector((state) => state.user?.currentUser?.isAdmin);
console.log(admin)
  return (
    <Router>
       <Topbar/>
       {!admin ?
       <Routes>
        <Route exact path="/" element={<Login/>}></Route>
         </Routes> :
        <div className="container">
        <Sidebar/>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>

              <Route path="/users" element={<UserList />} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/payments" element={<Payment/>} />

              <Route path="/user/:userId" element={<User />} />

              <Route path="/newUser" element={<NewUser />} />

              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />

              <Route path="/newproduct" element={<NewProduct />} />
              </Routes>
        </div>
        }
    </Router>
  );
}

export default App;
