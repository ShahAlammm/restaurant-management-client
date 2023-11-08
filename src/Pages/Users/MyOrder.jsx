import axios from "axios";
import { useEffect, useState } from "react";
import UserOrderedCard from "../../Components/UserOrderedCard/UserOrderedCard";

const MyOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/order").then((res) => {
      setOrder(res.data);
    });
  }, []);
  return (
    <div className="container m-auto">
      <div className="grid xl:grid-cols-2 gap-8 p-2 mt-5">
        {order?.map((item) => (
          <UserOrderedCard
            key={item._id}
            item={item}
            order={order}
            setOrder={setOrder}
          ></UserOrderedCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
