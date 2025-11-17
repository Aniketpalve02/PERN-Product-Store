
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

// Load the env file from backend folder
dotenv.config({ path: "./.env" });

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

//console.log("Database config loaded");

// creates a SQL connection using our env variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);
// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely
