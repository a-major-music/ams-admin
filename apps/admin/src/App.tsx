import "./App.css";

import { Sidebar } from "./sidebar";
import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Backdrop,
  Box,
} from "@mui/material";

import { Route, Routes } from "react-router-dom";
import {
  HomeRoute,
  ProductsRoute,
  ViewProductRoute,
  PurchaseOrdersRoute,
  SuppliersRoute,
  EditPurchaseOrderRoute,
  ViewPurchaseOrderRoute,
  AdjustStockRoute,
  EditProductRoute,
  LocationsRoute,
  StocktakeRoute,
  CustomSalesRoute,
  StockValueRoute
} from "./routes";

import ProductsView from "./views/products";
import ViewProductView from "./views/view-product";
import PurchaseOrdersView from "./views/purchase-orders";
import EditPurchaseOrderView from "./views/edit-purchaseorder";
import SuppliersView from "./views/suppliers";
import GlobalMessageProvider from "./context/globalMessage.provider";
import GlobalMessageDisplay from "./components/global.message.display";
import ViewPurchaseOrderView from "./views/view-purchaseorder";
import CustomSalesView from "./views/custom-sales";

import { useAuth0 } from "@auth0/auth0-react";
import { AdjustStockView } from "./views/adjust-stock";
import EditProductView from "./views/edit-product";
import { useEffect } from "react";
import { useServiceWorker } from "./useServiceWorker";
import LocationsView from "./views/locations";
import StocktakeView from "./views/stocktake";
import StockValueView from "./views/stock-value";
import { AuthTokenManager } from "./components/AuthTokenManager";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontSize: "4em",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2em",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#BA2224",
    },
    secondary: {
      main: "#DCDCDC",
    },
  },
});

function App() {
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } =
    useAuth0();

  // All hooks must be called before any early returns
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();

  // automatically reload the page if the underlying app changes
  useEffect(() => {
    if (showReload && waitingWorker) {
      reloadPage();
    }
  }, [waitingWorker, showReload, reloadPage]);

  // Show loading state while Auth0 is initializing
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    // Clear local storage while we're here
    localStorage.clear();
    loginWithRedirect();
    return null;
  }

  // Check if user has amajormusic.co.uk email domain
  // This is now also enforced by the backend, but we can show a friendly message
  const userEmail = user?.email;
  const isValidDomain = userEmail && userEmail.toLowerCase().endsWith('@amajormusic.co.uk');
  
  if (!isValidDomain) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2>Access Restricted</h2>
        <p>This application is only available to users with an @amajormusic.co.uk email address.</p>
        <p>You are currently signed in as: {userEmail}</p>
        <button 
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          style={{ marginTop: '20px', padding: '10px 20px' }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <AuthTokenManager>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalMessageProvider>
            <Container maxWidth={false}>
              <Box>
                <Sidebar />
              </Box>
              <Box sx={{marginLeft: "240px"}}>
                <GlobalMessageDisplay />
                <Routes>
                  <Route path={HomeRoute} element={<ProductsView />} />
                  <Route path={ProductsRoute} element={<ProductsView />} />
                  <Route
                    path={ViewProductRoute}
                    element={<ViewProductView />}
                  />
                  <Route
                    path={EditProductRoute}
                    element={<EditProductView />}
                  />
                  <Route
                    path={PurchaseOrdersRoute}
                    element={<PurchaseOrdersView />}
                  />
                  <Route
                    path={ViewPurchaseOrderRoute}
                    element={<ViewPurchaseOrderView />}
                  />
                  <Route
                    path={EditPurchaseOrderRoute}
                    element={<EditPurchaseOrderView />}
                  />
                  <Route
                    path={AdjustStockRoute}
                    element={<AdjustStockView />}
                  />
                  <Route path={SuppliersRoute} element={<SuppliersView />} />
                  <Route path={LocationsRoute} element={<LocationsView />} />
                  <Route path={StocktakeRoute} element={<StocktakeView />} />
                  <Route path={CustomSalesRoute} element={<CustomSalesView />} />
                  <Route path={StockValueRoute} element={<StockValueView />} />
                </Routes>
              </Box>
            </Container>
          </GlobalMessageProvider>
        </ThemeProvider>
      </div>
    </AuthTokenManager>
  );
}

export default App;
