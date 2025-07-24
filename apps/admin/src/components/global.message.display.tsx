import { Alert, Fade, Snackbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GlobalMessageContext from "src/context/globalMessage.context";
import { NOTIFICATION_TIMEOUT_MS } from "src/config";

import _ from 'lodash';

const GlobalMessageDisplay = () => {
    const messageContext = useContext(GlobalMessageContext);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!_.isEmpty(messageContext.message?.message)) {
            setOpen(true);
            setTimeout(() => setOpen(false), NOTIFICATION_TIMEOUT_MS);
        }
    }, [messageContext]);

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
            TransitionComponent={Fade}
            onClose={() => { setOpen(false) }}
        >
            <Alert severity={messageContext.message?.severity} sx={{ fontWeight: "bold", fontSize: "1.15em" }}>
                {messageContext.message?.message}
            </Alert>
        </Snackbar>
    )
}

export default GlobalMessageDisplay;
