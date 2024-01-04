// export function middleware() {
//   return Response.json({
//     msd: "Hell there",
//   });

import { NextResponse } from "next/server";

// }
//this will take it to the home route when users do about
export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}
//we can also send a request to a specific endpoint for example
// export const config = {
//   matcher: "/about",
// };

//if we don't the user to not use a specific endpoint, we can do this
export const config = {
  matcher: ["/about/:path*"],
};
