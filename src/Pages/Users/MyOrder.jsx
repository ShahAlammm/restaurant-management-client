import { useContext, useEffect, useState } from "react";
import UserOrderedCard from "../../Components/UserOrderedCard/UserOrderedCard";
import { AuthContext } from "../../Hook/AuthProvider";
import axios from "axios";


const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(order,user.email)
  useEffect(() => {
    setLoading(true);
    setError(null);

    if (user?.email) {
      axios
        .get(`https://restaurant-management-server-ochre.vercel.app/order`)
        .then((res) => {
          setOrder(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return (
    <div className="container m-auto">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="grid xl:grid-cols-2 gap-8 p-2 mt-5">
        {order?.map((item) => (
          <UserOrderedCard
            key={item._id}
            item={item}
            // You might want to pass only `item` or rename `order` prop if needed
            order={order}
            setOrder={setOrder}
          ></UserOrderedCard>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
