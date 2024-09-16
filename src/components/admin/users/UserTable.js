import React, { Fragment, useContext, useEffect, useMemo } from "react";
import { IcDelete, IcEdit, IcLoading } from "../../../image/ic_svg";
import moment from "moment";
import { useUsers } from "./UserQuery";
import { UserContext } from ".";
import Pagination from "@mui/material/Pagination";

const UserTable = () => {
  const { status, data, error } = useUsers();
  // useEffect(() => {
  //   refetch();
  // }, [data, refetch]);

  const users = useMemo(() => {
    return data?.Users || [];
  }, [data]);

  return (
    <div>
      {status === "loading" ? (
        <div className="flex items-center justify-center p-8">
          <IcLoading />
        </div>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <UserTableDetail users={users} />
        </>
      )}
    </div>
  );
};

const UserTableDetail = ({ users }) => {
  const [page, setPage] = React.useState(1);

  const onChangePage = (e, page) => {
    setPage(page);
  };

  const usersPerPage = 10;
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const start = (page - 1) * usersPerPage;
  const end = start + usersPerPage;
  const renderUsers = users.slice(start, end);

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Họ và tên</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Số điện thoại</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Tạo lúc</th>
              <th className="px-4 py-2 border">Chỉnh sửa/Xóa</th>
            </tr>
          </thead>
          <tbody>
            {renderUsers && renderUsers.length > 0 ? (
              renderUsers.map((item, key) => {
                return <UserTableDetailRow user={item} key={key} />;
              })
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-xl text-center font-semibold py-8"
                >
                  No user found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-span-1 flex items-center justify-center pt-8">
        <Pagination
          count={totalPages}
          page={page}
          onChange={onChangePage}
          shape="rounded"
        />
      </div>
    </Fragment>
  );
};

const UserTableDetailRow = ({ user }) => {
  const { dispatch } = useContext(UserContext);

  const editUser = (user) => {
    dispatch({
      type: "editUserModalOpen",
      user: { ...user },
    });
  };

  const deleteUser = (user) => {
    dispatch({
      type: "deleteUserModalOpen",
      user: { ...user },
    });
  };

  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">{user.name}</td>
        <td className="p-2 text-left">{user.email}</td>
        <td className="p-2 text-center">{user.phoneNumber}</td>
        <td className="p-2 text-center">{user.userRole}</td>
        <td className="p-2 text-center">
          {moment(user.createdAt).format("lll")}
        </td>
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) => editUser(user)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <IcEdit />
          </span>
          <span
            onClick={(e) => deleteUser(user)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <IcDelete />
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTable;
