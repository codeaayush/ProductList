import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./productList";

function Index() {
  const [data, setData] = useState([]);

  const generateToken = () => {
    const options = {
      method: "POST",
      url: "/postToken",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
        localStorage.setItem(
          "expiryTime",
          JSON.stringify(response.data.data.token_expire_time)
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getElectricityBill = useCallback(() => {
    const tokenData = JSON.parse(localStorage.getItem("token") || "");
    const options = {
      method: "POST",
      url: "/getElectricity",
      headers: {
        "Access-Control-Allow-Origin": "*",
        newToken: `${tokenData}`,
      },
      data: {
        session_id:
          "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data.electricity);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    generateToken();
    getElectricityBill();
    const intervalId = setInterval(() => {
        generateToken();
    }, 3 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [getElectricityBill]);

  return (
    <div>
      {data.length > 0 && (
        <>
          {data.map((val) => (
            <ProductList key={val} productData={val} />
          ))}
        </>
      )}
    </div>
  );
}

export default Index;
