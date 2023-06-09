import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Common/Layout";
import FavoritePage from "../pages/FavoritePage";
import MyAreaPage from "../pages/MyAreaPage";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="myArea" element={<MyAreaPage />} />
        <Route path="searchArea" element={<SearchPage />} />
        <Route path="favoriteArea" element={<FavoritePage />} />
        <Route path="/detail/:stationId" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
