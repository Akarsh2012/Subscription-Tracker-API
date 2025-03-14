/* eslint-disable no-undef */
import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` }); //extracting the env variables

export const { PORT, NODE_ENV } = process.env;
