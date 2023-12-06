import React, { useState } from "react";
import "./faq.scss";
const Modules = ({ data, landing }) => {
  const [opened, setOpend] = useState(null);
  const [maxH, setMaxH] = useState(0);
  const [slice, setSlice] = useState(5);
  const [seeAll, setSeeAll] = useState(true);
  const handleClick = (index) => {
    if (index == opened) {
      setMaxH(0);
      setOpend(null);
    } else {
      setMaxH(30 * (data[index].details.length + 1));
      setOpend(index);
    }
  };
  const handleSeeAll = () => {
    if (seeAll) {
      setSlice(data.length + 1);
      setSeeAll(false);
    } else {
      setSlice(5);
      setSeeAll(true);
    }
  };
  return (
    <div className="modules_cont">
      <h3>Course Curriculum</h3>
      <div className="modules">
        {!landing ? (
          data?.map((item, index) => {
            return (
              <div className="module" key={index}>
                <div className="module_head">
                  <div className="plus" onClick={() => handleClick(index)}>
                    <div className="horizontal"></div>
                    <div
                      className={`vertical ${
                        index == opened && "vertical_opened"
                      }`}
                    ></div>
                  </div>
                  <div className="module_title">{item.title}</div>
                </div>
                <div
                  className={`module_list ${index == opened && "margin_top"}`}
                  style={{ maxHeight: index == opened ? maxH : "0px" }}
                >
                  {item?.details.map((detail, detailIndex) => {
                    return (
                      <div className="detail" key={detailIndex}>
                        <div className="detail_dot"></div>
                        <div>{detail}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <>
            {data?.slice(0, slice).map((item, index) => {
              return (
                <div className="module" key={index}>
                  <div className="module_head">
                    <div className="plus" onClick={() => handleClick(index)}>
                      <div className="horizontal"></div>
                      <div
                        className={`vertical ${
                          index == opened && "vertical_opened"
                        }`}
                      ></div>
                    </div>
                    <div className="module_title">{item.title}</div>
                  </div>
                  <div
                    className={`module_list ${index == opened && "margin_top"}`}
                    style={{ maxHeight: index == opened ? maxH : "0px" }}
                  >
                    {item?.details.map((detail, detailIndex) => {
                      return (
                        <div className="detail" key={detailIndex}>
                          <div className="detail_dot"></div>
                          <div>{detail}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="see_all_modules" onClick={handleSeeAll}>
              {seeAll ? "See More..." : "See Less"}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modules;
