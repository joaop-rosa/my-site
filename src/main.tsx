import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// biome-ignore lint/style/noNonNullAssertion: fix later
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
);
