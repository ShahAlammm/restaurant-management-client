import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserOrderedCard from "../../Components/UserOrderedCard/UserOrderedCard";
import { AuthContext } from "../../Hook/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // Make a request to get orders based on the user's email
    axios
      .get(`https://restaurant-management-server-ochre.vercel.app/order`)
      .then((res) => {
        setOrder(res.data);
      });
  }, [user?.email]);
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
