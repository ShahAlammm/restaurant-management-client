// import axios from "axios";
import { useEffect, useState } from "react";
import CardDetails from "../../Components/CardDetails/CardDetails";
import { useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://restaurant-management-server-ochre.vercel.app/foods/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error("Error fetching food details:", error));
  }, [id]);
  return (
    <div className="container m-auto">
      <CardDetails details={details}></CardDetails>
    </div>
  );
};

export default Details;
