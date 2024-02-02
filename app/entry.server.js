import { renderToString } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';

export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
    const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

    responseHeaders.set('Content-Type', 'text/html');

    return new Response('<!DOCTYPE html>' + markup, {
        status: responseStatusCode,
        headers: responseHeaders
    });
}

// this is an optional export
export const handleDataRequest = (
    response,
    // same args that get passed to the action or loader that was called
    { request, params, context }
) => {
    response.headers.set('x-custom', 'yay!');
    return response;
};
