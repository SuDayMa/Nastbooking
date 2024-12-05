import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import FlightPage from "./pages/flightPage/FlightPage";
import CarRentalPage from "./pages/carRentalPage/CarRentalPage";
import SightseeingPage from "./pages/sightseeingPage/SightseeingPage";
import TaxiPage from "./pages/taxiPage/TaxiPage";
import Header from "./components/header/Header";
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/notFound/NotFound'; // Import NotFound component

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/hotels", element: <List /> },
    { path: "/hotels/:id", element: <Hotel /> },
    { path: "/flights", element: <FlightPage /> },
    { path: "/car-rental", element: <CarRentalPage /> },
    { path: "/sightseeing", element: <SightseeingPage /> },
    { path: "/taxi", element: <TaxiPage /> },
    { path: "*", element: <NotFound /> }, // Add this line for the 404 page
  ],
  {
    basename: "/Nastbooking", // Update this to your repository name
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <RouterProvider router={router}>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/flights" element={<FlightPage />} />
          <Route path="/car-rental" element={<CarRentalPage />} />
          <Route path="/sightseeing" element={<SightseeingPage />} />
          <Route path="/taxi" element={<TaxiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </RouterProvider>
  );
}

export default App;