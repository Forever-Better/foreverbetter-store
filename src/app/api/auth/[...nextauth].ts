import { verify } from 'argon2';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error('Missing username or password');
        }
        const user = (await prisma.user.findUnique({
          where: {
            email
          }
        })) as any;
        // if user doesn't exist or password doesn't match
        if (!user || !(await verify(user.password, password))) {
          throw new Error('Invalid username or password');
        }

        return user;
      }
    })
  ],

  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
