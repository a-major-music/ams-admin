import {
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { Link, NavLink } from "react-router-dom";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TuneIcon from '@mui/icons-material/Tune';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

import {
  HomeRoute,
  ProductsRoute,
  PurchaseOrdersRoute,
  SuppliersRoute,
  StockValueRoute,
  AdjustStockRoute,
  LocationsRoute,
  CustomSalesRoute
} from "./routes";

export const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Toolbar>
        <NavLink to={HomeRoute}>
          <Button variant="text" style={{ backgroundColor: "transparent" }}>
            <img
              src="/logo.png"
              width={drawerWidth * 0.8}
              alt="A Major Inventory Services"
            />
          </Button>
        </NavLink>
      </Toolbar>
      <Divider />
      <List dense={true} component="nav">
        <ListItemButton component={Link} to={ProductsRoute} key="products">
          <ListItemIcon>
            <Inventory2Icon />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to={StockValueRoute}
          key="stock-value"
        >
          <ListItemIcon>
            <CurrencyPoundIcon />
          </ListItemIcon>
          <ListItemText primary="Stock Value" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to={AdjustStockRoute}
          key="purchase-orders-create"
        >
          <ListItemIcon>
            <TuneIcon />
          </ListItemIcon>

          <ListItemText primary="Adjust Stock" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to={PurchaseOrdersRoute}
          key="purchase-orders"
        >
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Purchase Orders" />
        </ListItemButton>
        <ListItemButton component={Link} to={SuppliersRoute} key="suppliers" disabled>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Suppliers" />
        </ListItemButton>
        <ListItemButton component={Link} to={CustomSalesRoute} key="custom-sales">
          <ListItemIcon>
            <PsychologyAltIcon />
          </ListItemIcon>
          <ListItemText primary="Custom Sales" />
        </ListItemButton>

        <Divider sx={{ m: 2 }} />
        <ListItemButton component={Link} to={LocationsRoute} key="locations">
          <ListItemIcon>
            <WarehouseIcon />
          </ListItemIcon>
          <ListItemText primary="Locations" />
        </ListItemButton>
        <Divider sx={{ m: 2 }} />
        <ListItemButton onClick={() => { window.open('https://a-major-music.myshopify.com/admin/draft_orders/new') }} key="create-order">
          <ListItemIcon>
            <OpenInNewIcon />
          </ListItemIcon>
          <ListItemText primary="Create Order" />
        </ListItemButton>
        <ListItemButton onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSdLA1SMr_uFE_2G4prSBUoraHiX80oS6pB-3LImli7ERCW73w/viewform') }} key="create-spe">
          <ListItemIcon>
            <OpenInNewIcon />
          </ListItemIcon>
          <ListItemText primary="Create SPE" />
        </ListItemButton>
        <ListItemButton onClick={() => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSdNQSafM_sffiKQ3Q2w2xquP9KlI1ye0Law_k7yeUep-zJWeA/viewform') }} key="create-spe">
          <ListItemIcon>
            <OpenInNewIcon />
          </ListItemIcon>
          <ListItemText primary="Instrument Rental" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};
