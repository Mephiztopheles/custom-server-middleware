export function GET(){
    // normally loads redirects from payload cms
    return Response.json({destination: 'https://google.com'})
}