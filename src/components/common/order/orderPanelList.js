// import { useState } from "react";
// import { useDispatch } from "react-redux";
// // import Link from "next/link";
// import axios from "axios";

// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // import getAPI from "../../utils/getAPI";
// import OrderHistorySummary from "./order-history-summary";
// // import OrderItemList from "../order/order-item-list";
// // import { snackbarActions } from "../../store/snackbar-slice";

// function OrderPanelList(props) {
//     const { dummyOrders } = props;
//     const dispatch = useDispatch();

//     // const [ expanded, setExpanded ] = useState(0);

//     // const handleChange = (panel) => (_, isExpanded) => {
//     //     setExpanded(isExpanded ? panel : false)
//     // };

//     return (
//         <Box py={2}>
//             {items.map((item, index) => {
//                 const { order, orderItems } = item;
//                 const orderId = order._id;

//                 const handleOrderBack = async() => {
//                     setIsRequesting(true);

//                     const ORDER_BACK_API = getAPI(process.env.NEXT_PUBLIC_ORDER_BACK_API, { id: orderId });
            
//                     try {
//                         const res = await axios.patch(ORDER_BACK_API);
            
//                         if (res.status === 200) {
//                             dispatch(snackbarActions.setSnackbarState({
//                                 open: true, 
//                                 type: "success", 
//                                 message: "Successfully order back item."
//                             }));

//                             setDataIsChanging(true);
//                         } 
//                     } catch(err) {
//                         dispatch(snackbarActions.setSnackbarState({
//                             open: true , 
//                             type: "error", 
//                             message: "Oops... Something went wrong."
//                         }));

//                         setIsRequesting(false);
//                     }
//                 };

//                 const handleCancelOrder = async() => {
//                     setIsRequesting(true);

//                     const CANCEL_ORDER_API = getAPI(process.env.NEXT_PUBLIC_CANCEL_ORDER_API, { id: orderId });
            
//                     try {
//                         const res = await axios.delete(CANCEL_ORDER_API);
            
//                         if (res.status === 204) {
//                             dispatch(snackbarActions.setSnackbarState({
//                                 open: true, 
//                                 type: "success", 
//                                 message: "Successfully cancel order."
//                             }));

//                             setDataIsChanging(true);
//                         }
//                     } catch(err) {
//                         dispatch(snackbarActions.setSnackbarState({
//                             open: true , 
//                             type: "error", 
//                             message: "Oops... Something went wrong."
//                         }));

//                         setIsRequesting(false);
//                     }
//                 };

//                 return (
//                     <Accordion 
//                         key={`order-${index}`}
//                         expanded={expanded === index}
//                         onChange={handleChange(index)}
//                         defaultExpanded={index === 0}
//                     >
//                         <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             id={orderId}
//                             className="bg-[#b0cae5]"
//                         >
//                             <OrderHistorySummary
//                                 orderDate={order.orderDate}
//                                 total={order.grandTotal}
//                                 address={`${order.shippingAddress.city}, ${order.shippingAddress.rest}`}
//                                 id={orderId}
//                                 isCanceled={order.isCanceled}
//                                 orderStatus={order.status}
//                                 isExpedited={order.isExpedited}
//                             />
//                         </AccordionSummary>

//                         <AccordionDetails>
//                             <Stack direction="row">
//                                 <Link href={`/account/order-history/${orderId}`}>
//                                     <Button>
//                                         View order details
//                                     </Button>
//                                 </Link>

//                                 {order.isCanceled &&
//                                     <Button
//                                         variant="text"
//                                         color="secondary"
//                                         onClick={handleOrderBack}
//                                         className="ml-auto"
//                                         disabled={isRequesting}
//                                     >
//                                         Order back
//                                     </Button>
//                                 }

//                                 {(order.status === "Ordered" && !order.isCanceled) &&
//                                     <Button
//                                         variant="text"
//                                         color="error"
//                                         onClick={handleCancelOrder}
//                                         className="ml-auto"
//                                         disabled={isRequesting}
//                                     >
//                                         Cancel
//                                     </Button>
//                                 }
//                             </Stack>

//                             <Divider />
                            
//                             <OrderItemList 
//                                 orderItems={orderItems}
//                                 orderId={orderId}
//                                 isCanceled={order.isCanceled}
//                                 status={order.status}
//                             />
//                         </AccordionDetails>
//                     </Accordion>
//                 )
//             })}
//         </Box>
//     )
// };

// export default OrderPanelList;