"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProUserTrue } from "@/store/userSlice";

export default function SuccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProUserTrue());

  }, [dispatch]);

  return (
    <div style={{ padding: 40, textAlign: "center",height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>✅ Payment Successful!</h1>
      <p>You are now a Pro user!</p>
    </div>
  );
}
