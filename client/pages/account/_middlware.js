import { NextRequest, NextMiddleware } from 'next/server';

export const middlware = (req) => {
    const router = useRouter();
    const url = req.url;

    if (url.includes('/account')) return NextRequest.redirect('/');
}
