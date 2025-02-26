// import { NextResponse } from 'next/server';

// export async function middleware(request) {
//     const authToken = request.cookies.get("nad_auth_token")?.value;
//     const { pathname } = request.nextUrl;

//     const requestedPath = request.nextUrl.pathname;
//     if (!authToken && (requestedPath.startsWith('/dashboard' || pathname == '/dashboard'))) {
//         return NextResponse.redirect(new URL('/auth/login', request.url));
//     }

//     // Define public routes
//     const isPublicRoute = pathname.startsWith("/auth/:path**");

//     // If the route is public
//     if (isPublicRoute && authToken) {
//         return NextResponse.redirect(new URL("/", request.url));

//     }


//     // If the user is authenticated, allow access to the private route
//     return NextResponse.next();

// }

// export const config = {
//     matcher: ['/dashboard/:path*', '/dashboard', '/auth/:path*'],
// }


import { NextResponse } from 'next/server';

export async function middleware(request) {
    const authToken = request.cookies.get("nad_auth_token")?.value;
    const { pathname } = request.nextUrl;

    // Check if the requested path is a dashboard route
    const isDashboardRoute = pathname.startsWith('/dashboard');

    // Redirect to login if user is not authenticated and accessing a protected route
    if (!authToken && isDashboardRoute) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Check if the route is a public route
    const isPublicRoute = pathname.startsWith('/auth/');

    // Redirect authenticated users away from public routes
    if (isPublicRoute && authToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If all checks pass, proceed with the request
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard', '/auth/:path*'],
};
