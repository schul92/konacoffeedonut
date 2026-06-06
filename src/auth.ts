import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Email allowlist for the admin area. Set ADMIN_EMAILS to a comma-separated
 * list of Google account emails that are allowed in, e.g.
 *   ADMIN_EMAILS="owner@gmail.com, manager@gmail.com"
 * Anyone who signs in with a Google account NOT on this list is rejected.
 */
const allowlist = (process.env.ADMIN_EMAILS ?? '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [Google],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    // Only allowlisted Google emails may sign in.
    signIn({ user }) {
      const email = user.email?.toLowerCase();
      return !!email && allowlist.includes(email);
    },
  },
});
