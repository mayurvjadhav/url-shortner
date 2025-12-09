import { Header } from "../components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container m-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
