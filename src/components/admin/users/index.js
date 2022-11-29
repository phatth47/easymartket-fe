import React, { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "./FetchApi";
import { IcDelete, IcEdit, IcLoading } from "../../../image/ic_svg";
import moment from "moment";
import AdminLayout from "../layout";

const Users = () => {
  return (
    <Fragment>
      <AdminLayout children={<UserComponent />} />
    </Fragment>
  );
};

const UserComponent = () => {
  const { status, data, error, isFetching } = useUsers();

  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <div>
        {status === "loading" ? (
          <div className="flex items-center justify-center p-8">
            <IcLoading className="w-12 h-12 animate-spin text-gray-600"></IcLoading>
          </div>
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <UserTable users={data.Users} />
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
};

const UserTable = ({ users }) => {
  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Created at</th>
              <th className="px-4 py-2 border">Updated at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((item, key) => {
                return <UserTableRowDetail user={item} key={key} />;
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
        <div className="text-sm text-gray-600 mt-2">
          Total {users && users.length} product found
        </div>
      </div>
    </Fragment>
  );
};

const UserTableRowDetail = ({ user }) => {
  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left">{user.name}</td>
        <td className="p-2 text-left">{user.email}</td>
        <td className="p-2 text-center">{user.userRole}</td>
        <td className="p-2 text-center">
          {moment(user.createdAt).format("lll")}
        </td>
        <td className="p-2 text-center">
          {moment(user.updatedAt).format("lll")}
        </td>
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) => {}}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <IcEdit></IcEdit>
          </span>
          <span
            onClick={(e) => {}}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <IcDelete></IcDelete>
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await getAllUser();
      return data;
    },
  });
}

export default Users;
