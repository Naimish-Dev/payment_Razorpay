import React from "react";
import Card from "./Card";
import { Box, Stack } from "@chakra-ui/react";
import Axios from "axios";


const Home = () => {
    

  const Orderhendler =   async(amounts) => {
      try {
        const {
          data: { key },
        } = await Axios.get("http://localhost:4000/api/getkey");
        const { data } = await Axios.post(
          "http://localhost:4000/api/checkout",
          { amounts }
        );
        const options = {
          key: key, // Enter the Key ID generated from the Dashboard
          amount: Number(data.data.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Testing Name", //your business name
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "http://localhost:4000/api/paymentverification", // verify payment with backend
          prefill: {
            name: "Gaurav Kumar", //your customer's name
            email: "gaurav.kumar@example.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

          var rzp1 = new window.Razorpay(options);
        // var rzp1 = new Razorpay(options);
        rzp1.open();
      } catch (e) {
        console.log("ordered" + e);
      }
    }
    

  return (
    <Box>
      <Stack
        height={"100vh"}
        justifyContent="center"
        alignItems={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={"https://picsum.photos/200"}
          Orderhendler={Orderhendler}
        />
        <Card
          amount={3000}
          img={"https://picsum.photos/300"}
          Orderhendler={Orderhendler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
