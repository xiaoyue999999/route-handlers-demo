import { NavBar } from '@/components/landing-components/nav-bar';
import { NavLinks } from '@/components/landing-components/nav-links';

export default function LandingPage() {
  console.log('LandingPage');

  return (
    <main>
      <h1>LandingPage</h1>
      <NavBar />
      <NavLinks />
    </main>
  );
}
