import { configureStore } from "@reduxjs/toolkit";
import reducer from "./sliceUser";

const store = configureStore({ reducer });

export default store;
