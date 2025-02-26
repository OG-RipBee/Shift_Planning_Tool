import React, { useState } from "react";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.min.css";

function ShiftPlanner() {
  const [data, setData] = useState([
    ["Department", "Cases", "Break Cases", "Hours"],
    ["Frozen", 300, 50, 6.0],
    ["Dairy", 300, 30, 6.0],
  ]);

  return (
    <div>
      <h1>Shift Planning Tool</h1>
      <div id="spreadsheet"></div>
    </div>
  );
}

export default ShiftPlanner;

import { Client } from "@microsoft/microsoft-graph-client";

async function fetchExcelData() {
  const client = Client.init({
    authProvider: (done) => {
      done(null, "YOUR_ACCESS_TOKEN"); // Replace with actual auth token
    },
  });

  const response = await client
    .api("/me/drive/root:/shift-planning.xlsx:/content")
    .get();
  console.log(response);
}
