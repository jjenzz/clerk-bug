import { clerkMiddleware } from '@clerk/nextjs/server';

export const middleware = clerkMiddleware(async (auth) => {
  await auth.protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};
