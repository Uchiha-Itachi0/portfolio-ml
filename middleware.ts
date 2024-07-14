import { NextRequest, NextResponse } from 'next/server';
import { verifyTokenResponse } from "@/utils/types";
import makeRequest from "@/utils/requst_handler";

export async function middleware(req: NextRequest) {
    const tokenPara = req.cookies.get('token')?.value;
    console.log('Token:', tokenPara);

    if (!tokenPara) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    try {
        const response: any = await makeRequest('blog/validate', 'get', null,true, req);
        console.log('Token validation response:', response);

        if (response.status === 200) {
            return NextResponse.next();
        } else {
            console.log('Token is invalid according to the server');
            return NextResponse.redirect(new URL('/', req.url));
        }
    } catch (error: any) {
        console.error('Error verifying token:', error.response ? error.response.data : error.message);
        console.error('Request config on error:', error.config);
        return NextResponse.redirect(new URL('/', req.url));
    }
}

export const config = {
    matcher: '/admin/:path*',
};
