import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import UserAddedCard from "../../Components/UserAddedFood/UserAddedCard";

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restaurant-management-server-ochre.vercel.app/userAdd`)
      .then((res) => {
        setOrder(res.data);
      });
  }, [user?.email]);
  return (
    <div className="container m-auto">
      <div className="grid xl:grid-cols-2 gap-8 p-2 mt-5">
        {order?.map((item) => (
          <UserAddedCard
            key={item._id}
            item={item}
            order={order}
            setOrder={setOrder}
          ></UserAddedCard>
        ))}
      </div>
    </div>
  );
};

export default MyFood;
