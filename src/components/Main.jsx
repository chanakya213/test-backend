import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
export default function Main() {
  const removeitem = (name) => {
    const finalproducts = products.filter((i) => i.productName !== name);
    products = finalproducts;
  };

  const random = Math.floor(Math.random() * 100) + 1;
  const invoice = "INV" + random;
  let products = [
    {
      productName: "MANGO",
      produvtCode: "MNG8798",
      sellingSenario: "genaral",
      qty: 20,
      price: 20,
    },
    {
      productName: "APPLE",
      produvtCode: "APL9809",
      sellingSenario: "genaral",
      qty: 20,
      price: 40,
    },
    {
      productName: "BANANA",
      produvtCode: "BAN8798",
      sellingSenario: "genaral",
      qty: 20,
      price: 10,
    },
    {
      productName: "GUAVA",
      produvtCode: "GU878",
      sellingSenario: "genaral",
      qty: 20,
      price: 6,
    },
  ];
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const [salesData, setSalesData] = useState({
    // "invoiceNo": 87362784,
    // "InvoiceDate": "12/43/22",
    // "customer": "c jashcjh",
    // "deliveryType": "jasgdioquyegf",
    // "productCode": "jh98374",
    // "paymentMode": "sdhvbcje",
    // "subtotal": 3475,
    // "cashamount": 98495,
    // "checqueDetails": "fewfger"

    invoiceNo: invoice,
    InvoiceDate: today,
    customer: "",
    deliveryType: "",
    productCode: "",
    paymentMode: "",
    subtotal: "",
    cashamount: "",
    checqueDetails: "",
  });
  useEffect(() => {
    axios.get("http://localhost:3200/sales").then((res) => {
      console.log(res.data);
    });
  }, []);

  const handleischecked = (e, value) => {
    if (e.target.checked) {
      setSalesData({ ...salesData, paymentMode: value });
    }
  };

  const submitsales = () => {
    console.log(salesData);
    axios.post("http://localhost:3200/sales", salesData).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div className="nav">
        <MenuIcon style={{ fontSize: "3.5rem", padding: "10px" }} />
        <AccountCircleIcon style={{ fontSize: "3.5rem", padding: "10px" }} />
      </div>
      <div className="main-component">
        <div className="main-content">
          <div className="form-fields">
            <div class="row">
              <div class="col">
                <label htmlFor="">Invoice No :</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  placeholder="Invoice No"
                  aria-label="invoice no"
                  defaultValue={invoice}
                />
              </div>
              <div class="col">
                <label htmlFor="">Invoice Date :</label>
                <input
                  type="text"
                  readOnly="readonly"
                  class="form-control mt-2"
                  placeholder="Invoice Date"
                  aria-label="invoice date"
                  defaultValue={today}
                />
              </div>
              <div class="col">
                <label htmlFor="">Customer :</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  placeholder="Customer"
                  aria-label="customer"
                  onChange={(e) =>
                    setSalesData({ ...salesData, customer: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <label htmlFor="">Delivery Type :</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  placeholder="Delivery Type"
                  aria-label="delivery type"
                  onChange={(e) =>
                    setSalesData({ ...salesData, deliveryType: e.target.value })
                  }
                />
              </div>
              <div class="col">
                <label htmlFor="">Product Name Or Code :</label>
                <input
                  type="text"
                  class="form-control mt-2"
                  placeholder="Product Name Or Code"
                  aria-label="product name"
                  onChange={(e) =>
                    setSalesData({ ...salesData, productCode: e.target.value })
                  }
                />
              </div>
              <div class="col invisible">
                <input
                  type="text"
                  class="form-control mt-2"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
          </div>
          <div className="table-sales">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">SELLING SENARIO </th>
                  <th scope="col">QTY</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {products.map((i) => {
                  return (
                    <tr>
                      <th scope="row">
                        <CloseIcon
                          style={{
                            color: "red",
                            fontSize: "1.2rem",
                            fontWeight: 900,
                          }}
                          onClick={() => removeitem(i.productName)}
                        />
                      </th>
                      <td>
                        {i.productName} <br />
                        {i.produvtCode}
                      </td>
                      <td className="text-center">
                        <input
                          type="text"
                          class="form-control"
                          aria-label="First name"
                          defaultValue={i.sellingSenario}
                          style={{ width: "auto" }}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          class="form-control ml-auto"
                          aria-label="First name"
                          defaultValue={i.qty}
                          style={{ width: "auto" }}
                          onChange={(e) => {
                            setSalesData({
                              ...salesData,
                              subtotal: e.target.value * i.price,
                            });
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          readonly="readonly"
                          type="text"
                          class="form-control ml-auto"
                          aria-label="First name"
                          defaultValue={i.price}
                          style={{
                            width: "auto",
                            backgroundColor: "whitesmoke",
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          readonly="readonly"
                          class="form-control ml-auto"
                          aria-label="First name"
                          defaultValue={i.price}
                          style={{
                            width: "auto",
                            backgroundColor: "whitesmoke",
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  {/* <th scope="row">3</th> */}
                  <td colspan="5">
                    {" "}
                    <b> Total</b>
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      class="form-control ml-auto"
                      aria-label="First name"
                      defaultValue={1000}
                      readonly="readonly"
                      style={{
                        width: "auto",
                        backgroundColor: "whitesmoke",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-sales">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">PAYMENT MODE</th>
                  <th scope="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cash"
                        name="paymentmode"
                        onChange={(e) => handleischecked(e, "cash")}
                      />
                      <label class="form-check-label" for="cash">
                        Cash
                      </label>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="cheque"
                        name="paymentmode"
                        onChange={(e) => handleischecked(e, "checque")}
                      />
                      <label class="form-check-label" for="cheque">
                        Cheque
                      </label>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="card"
                        name="paymentmode"
                        onChange={(e) => handleischecked(e, "card")}
                      />
                      <label class="form-check-label" for="card">
                        Card
                      </label>
                    </div>
                  </th>
                  <th scope="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="voucher"
                        name="paymentmode"
                        onChange={(e) => handleischecked(e, "voucher")}
                      />
                      <label class="form-check-label" for="voucher">
                        Voucher
                      </label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Checque Amount</td>
                  <td colspan="2">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      aria-label="cheque amount"
                      onChange={(e) =>
                        setSalesData({
                          ...salesData,
                          paymentMode: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>Checque Details</td>
                  <td colspan="2">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      aria-label="First name"
                      onChange={(e) =>
                        setSalesData({
                          ...salesData,
                          checqueDetails: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  {/* <td scope="row"></td> */}
                  <td colspan="3">
                    {" "}
                    {/* <input
                      type="text"
                      class="form-control"
                      aria-label="First name"
                    /> */}
                  </td>
                  <td>Cash Amount</td>
                  <td colspan="2">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      aria-label="cash amount"
                      onChange={(e) =>
                        setSalesData({
                          ...salesData,
                          cashamount: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitsales}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <div className="submit-btn">
         
        </div> */}
      </div>
    </>
  );
}
