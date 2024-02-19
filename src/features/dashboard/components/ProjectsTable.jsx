import React from "react";

const ProjectsTable = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="w-full table-auto projects-table">
        <thead className=" ">
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Budget</th>
            <th>Staff</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Project 1.</td>
            <td>02-10-2022</td>
            <td>02-10-2023</td>
            <td>$200,000</td>
            <td>Staff</td>
            <td>CTA</td>
          </tr>
          <tr>
            <td>Project 1.</td>
            <td>02-10-2022</td>
            <td>02-10-2023</td>
            <td>$200,000</td>
            <td>Staff</td>
            <td>CTA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
