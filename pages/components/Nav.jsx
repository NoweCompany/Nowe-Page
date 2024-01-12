import { useRouter } from 'next/router';
import Link from 'next/link';
import navstyle from '../../styles/global/nav.module.css';

export default function Nav() {
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname ? navstyle.activeLink : '';

  return (
    <nav className={navstyle.navbar}>
      <div className={navstyle.navItems}>
        <Link href="/">
          <div className={isActive('/')}>Home</div>
        </Link>
        <Link href="/sobre">
          <div className={isActive('/sobre')}>Sobre</div>
        </Link>
        <Link href="/contato">
          <div className={isActive('/contato')}>Contato</div>
        </Link>
      </div>
      <div className={navstyle.navButton}>
        <Link href='https://weon.nowecompany.com.br/' passHref className={navstyle.weonBtn} target="_blank" rel="noopener noreferrer">weon
        </Link>
      </div>
    </nav>
  );
}
