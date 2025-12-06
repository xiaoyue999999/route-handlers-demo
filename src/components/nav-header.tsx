import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export function NavHeader() {
  return (
    <div className="flex justify-between">
      <Link href={'/'}>
        <h1>Next App</h1>
      </Link>

      <div className="flex gap-3">
        <SignedOut>
          <SignInButton>
            <span>sign in === 登录</span>
          </SignInButton>
          <SignUpButton>
            <span>sign up === 注册</span>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <Link href="/user-profile">profile</Link>
          <SignOutButton />
        </SignedIn>
      </div>
    </div>
  );
}
