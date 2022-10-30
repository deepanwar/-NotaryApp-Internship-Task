import React, { useEffect, useState } from "react";
import { getCompaniesData } from "../services/apiRequests";
import Loading from "./Loading";

const Table = () => {
  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
   getCompaniesData()
    .then(setCompaniesList)
    .catch((err) => console.log(err));
  }, []);



  return (
    <div className="overflow-x-auto relative rounded-lg">
    {companiesList.length == 0 && <Loading/>}
      <table className="w-full  text-sm text-left  text-gray-400">
        <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Company Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {companiesList.companies?.map((row, i) => (
            <TableRow
              key={i}
              name={row.name}
              email={row.email}
              status={row.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

//  Row Component
const TableRow = ({ name, email, status }) => (
  <tr className=" border-b bg-gray-800 border-gray-700">
    <th
      scope="row"
      className="py-4 px-6 font-medium text-white whitespace-nowrap"
    >
      {name}
    </th>
    <td className="py-4 px-6">{email}</td>
    <td>
      {status === "active" ? (
        <p className="py-4 px-6">
          <span className="inline-flex w-2 h-2 mr-2 rounded-full bg-green-500" />
          {status}
        </p>
      ) : (
        <p className="py-4 px-6 text-gray-600">
          <span className="inline-flex w-2 h-2 mr-2 rounded-full bg-red-500" />
          {status}
        </p>
      )}
    </td>
  </tr>
);

export default Table;
