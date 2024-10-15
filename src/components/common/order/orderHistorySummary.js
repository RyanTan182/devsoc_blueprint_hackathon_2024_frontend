import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { DELIVERY_STATUS } from "../../appConfig";
import numberWithCommas from "../../utils/numberWithCommas";

function OrderHistorySummary(props) {
    const { orderDate, total, address, id, isCanceled, orderStatus, isExpedited } = props;

    const displayedOrderDate = orderDate.split("T")[0];

    const getChipColor = (status, orderStatus) => {
        let chipColor;
    
        switch(true) {
            case orderStatus === status && orderStatus === DELIVERY_STATUS[0]: 
                chipColor = "primary";
                break;
    
            case orderStatus === status && orderStatus === DELIVERY_STATUS[1]: 
                chipColor = "warning";
                break;
    
            case orderStatus === status && orderStatus === DELIVERY_STATUS[2]: 
                chipColor = "secondary";
                break;
    
            case orderStatus === status && orderStatus === DELIVERY_STATUS[3]: 
                chipColor = "success";
                break;

            default:
                chipColor = "default";
                break;
        }

        return chipColor;
    };
    
    return (
        <Box className="flex flex-col flex-1">
            {isCanceled ?
                <Box mb={2}>
                    <Chip 
                        color="error"
                        size="small"
                        label="Canceled"
                        className="max-w-[100px]"
                    />
                </Box> :
                
                <Box mb={2}>
                    <Breadcrumbs   
                        aria-label="breadcrumb"
                        separator={<NavigateNextIcon fontSize="small" />}
                    >
                        {DELIVERY_STATUS.slice(0, 4).map((status, index) => (
                            <Chip
                                key={`deliver-status-${index}`}
                                label={status}
                                size="small"
                                color={getChipColor(status, orderStatus)}
                            />
                        ))}
                    </Breadcrumbs>
                </Box> 
            }

            <div className="flex">
                <div className="min-w-[100px] mr-5">
                    <Typography variant="overline">
                        Order placed
                    </Typography>

                    <Typography variant="body1">
                        {displayedOrderDate}
                    </Typography>
                </div>

                <div className="min-w-[50px] mx-5">
                    <Typography variant="overline">
                        Total
                    </Typography>

                    <Typography variant="body1">
                        ¥ {numberWithCommas(total)}
                    </Typography>
                </div>

                <div className="min-w-[50px] ml-5">
                    <Typography variant="overline">
                        Ship to
                    </Typography>

                    <Typography variant="body1">
                        {address}
                    </Typography>
                </div>

                <div className="min-w-[50px] ml-5">
                    <Typography variant="overline">
                        Shipping method
                    </Typography>

                    <Typography variant="body1">
                        {isExpedited ? "Expedited" : "Standard"}
                    </Typography>
                </div>

                <div className="ml-auto mr-5">
                    <Typography variant="overline">
                        Order #{id.slice(0, 10)}
                    </Typography>
                </div>
            </div> 
        </Box>
    )
};

export default OrderHistorySummary;