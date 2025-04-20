'use client';

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import('./csr'), {ssr: false})


export default function CsrSsrWrapper() {
    return (
        <NoSSR/>
    );
}