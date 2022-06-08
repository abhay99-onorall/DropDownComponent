import React, { useState } from "react";
import { Dataset } from "./Dataset";

function Dropdown() {
  const [storeid, setstoreid] = useState();
  const [storetitle, setstoretitle] = useState();
  const [storesubtitle, setstoresubtitle] = useState();
  const [data, setdata] = useState(Dataset);

  console.log("stored data", storeid, storetitle, storesubtitle);

  return (
    <div style={{ margin: "50px" }}>
      <h1>seleted item {storetitle}</h1>
      {data.map((val, index) => {
        return (
          <>
            <h1
              key={index}
              onClick={() => [setstoreid(val.id), setstoretitle(val.title)]}
            >
              {val.title}
            </h1>
            {val.sub_title_data.map((val, index) => {
              return (
                <>
                  {storeid === val.parent_id ? (
                    <p
                      key={index}
                      onClick={() => setstoresubtitle(val.sub_title)}
                    >
                      {val.sub_title}
                    </p>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
}

export default Dropdown;
