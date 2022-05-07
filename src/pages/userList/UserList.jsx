import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, getUsers } from "../../redux/apiCalls";


export default function UserList() {



  const dispatch= useDispatch();
  const users= useSelector(state=>state.client?.users)


 

  useEffect(() => {
    getUsers(dispatch)
 
   }, [dispatch])
   
   const handleDelete = async (id) => {
    deleteUser(id, dispatch)
  };

   
  
  const columns = [
    { field: "id", headerName: "ID", width: 200 ,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          {params.row._id}
        </div>
      );
    },},
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/adminpanel/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        getRowId={(row)=> row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
