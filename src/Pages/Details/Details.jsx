import axios from "axios";
import { useEffect, useState } from "react";
import CardDetails from "../../Components/CardDetails/CardDetails";

const Details = () => {
  const [details, setDetails] = useState([]);
//   const [elements, setElement] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/foods`).then(res=>{
        setDetails(res.data)
    });
    // const findItem = elements?.find((details) => details.id == id);
    // setDetails(findItem);
  }, []);
  return (
    <div className="container m-auto">
      <CardDetails details={details}></CardDetails>
    </div>
  );
};

export default Details;
