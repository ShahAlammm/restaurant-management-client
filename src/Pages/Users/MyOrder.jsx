import axios from "axios";
import { useEffect, useState } from "react";
import UserOrderedCard from "../../Components/UserOrderedCard/UserOrderedCard";

const MyOrder = () => {
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/order`).then((res) => {
      setOrderItem(res.data);
    });
  }, []);
  return (
   <div className="container m-auto">
     <div className="grid xl:grid-cols-2 gap-8 p-2 mt-5">
      {orderItem?.map((item) => (
        <UserOrderedCard key={item._id} item={item}></UserOrderedCard>
      ))}
    </div>
   </div>
  );
};

export default MyOrder;
