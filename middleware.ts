import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log('middleware done');
  
  const token = request.cookies.get('Session')?.value;
  console.log(token);
  
  if(!token){
    return NextResponse.rewrite(new URL("/signin", request.url))
    

  }
  
  //console.log('middleware:',token);
}
 
export const config = {
  matcher: ["/inventory/:path*", "/financial/:path*", "/invoices/:path*"],
}