import { handleAuth } from "@auth0/nextjs-auth0";

/**
 * Creates
 *
 * /api/auth/login
 * /api/auth/logout
 * /api/auth/callback -> redirect user after success login
 * /api/auth/me -> route to fetch user profile
 */

export default handleAuth();
