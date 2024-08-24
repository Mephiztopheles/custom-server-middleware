import {NextRequest, NextResponse} from "next/server";

async function handleRedirects(origin: string, path: string) {
    const redirects = await fetch(`${origin}/api/redirects?where[from][equals]=${path}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        next: {tags: ["redirects"]}
    })

    return await redirects.json()
}

export async function middleware(request: NextRequest) {

    const {destination} = await handleRedirects(request.nextUrl.origin, request.nextUrl.pathname.substring(1))

    if (destination && request.nextUrl.pathname == '/redirect')
        return NextResponse.redirect(new URL(destination, request.url))
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
