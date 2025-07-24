import { Chip } from "@mui/material";

import { PurchaseOrderState } from "@amm/types";

export type StateChipParams = {
    state: PurchaseOrderState
    size?: "small"|"medium"
}

const StateChip = (params: StateChipParams) => {
    const size = params.size || "small";

    // Note that these colours are cosmetic, and intended to mimic TradeGecko
    return (
  <>
    {params.state === PurchaseOrderState.DRAFT && <Chip label="Draft" variant="outlined" color="warning" size={size} />}
    {params.state === PurchaseOrderState.ACTIVE && <Chip label="Active" color="success" variant="outlined" size={size} />}
    {params.state === PurchaseOrderState.RECEIVED && <Chip label="Received" color="error" variant="outlined" size={size} />}
    {params.state === PurchaseOrderState.ARCHIVED && <Chip label="Archived" variant="outlined" color="success" size={size} />}
  </>
)};

export default StateChip;
