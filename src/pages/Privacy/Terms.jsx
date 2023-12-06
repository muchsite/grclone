import axios from "axios";
import DOMPurify from "dompurify";
import React, { useState, useEffect } from "react";
import LoadnigMain from "../../loading/LoadnigMain";
import { BaseURL } from "../home/Home";
import "./p.scss";
const Terms = () => {
  const [privacy_policies, setprivacy_policies] = useState({});
  const [refund, setrefund] = useState({});
  const [terms_and_conditions, setterms_and_conditions] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BaseURL + "/otherpages"}`);
        const p = DOMPurify.sanitize(res.data[0].privacy_policies);
        setprivacy_policies(p);
        const r = DOMPurify.sanitize(res.data[0].refund);
        setrefund(r);
        const t = DOMPurify.sanitize(res.data[0].terms_and_conditions);
        setterms_and_conditions(t);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="privacy_container">
          <div dangerouslySetInnerHTML={{ __html: terms_and_conditions }}></div>
        </div>
      )}
    </>
  );
};

export default Terms;
