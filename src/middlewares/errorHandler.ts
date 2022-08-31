import express from "express";
import "express-async-errors";

export function errorHandlingMiddleware(error, req, res, next) {
	//if (error.type === "error_...") return res.sendStatus(...);
	//if (error.type === "error_...") return res.sendStatus(...);
	//if (error.type === "error_...") return res.sendStatus(...);

	return res.sendStatus(500);
}

