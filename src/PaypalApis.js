import axios from "axios";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function PayPalApis() {
    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return axios.post("http://localhost:4000/api/neworder",{ cart: {
            description: "toy",
            cost: 200,

            //"YOUR_PRODUCT_STOCK_KEEPING_UNIT",
            sku: "ABC12",
            // "YOUR_PRODUCT_QUANTITY",
            quantity: "1",
        },
}, {
           
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
           
        })
            .then((response) => response.data)
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        // Order is captured on the server and the response is returned to the browser
        return axios.post("http://localhost:4000/api/neworder/orderID",{ orderID: 'abc121'} ,{
           
            headers: {
                "Content-Type": "application/json",
            },
           
        })
            .then((response) => response.data);
    };
    return (
        <PayPalButtons style={{
            
            layout:"horizontal",
            height:48,
            tagline:false
        }}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    );
}