import { Routes } from "@generouted/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./contexts/LanguageProvider";
import "./globals.css";
import "./App.module.css";

// biome-ignore lint/style/noNonNullAssertion: fix later
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LanguageProvider>
			<Routes />
		</LanguageProvider>
	</React.StrictMode>,
);
