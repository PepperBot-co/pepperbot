import NextAuth from "next-auth";
import { authOptions } from "@pb/server/auth";

export default NextAuth(authOptions);
