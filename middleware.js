import { clerkMiddleware, createRouteMatcher  } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);
export default clerkMiddleware(async(auth, req)=>{
  const { userId, redirectToSignIn } = await auth()
  console.log('Middleware triggered for route:', req.url);
  if(!userId && isProtectedRoute(req)) {
    console.log('Redirecting to sign-in');
    // Add logic to run if the user does not have the required permissions

    return redirectToSignIn()
  }
  return NextResponse.next()
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};