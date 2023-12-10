import navstyle from '../../styles/nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return (
        <>
          <nav className={navstyle.navbar}>
            <div className={navstyle.navItems}>
                <Link href="./home">Home</Link>
                <Link href="./sobre">Sobre</Link>
                <Link href="./contato">Contato</Link>
            </div>
            <div className={navstyle.navButton}>
                    <Link className={navstyle.weonBtn} href='https://nowecompany.com.br/weon/' target="_blank" rel="noopener noreferrer">weon</Link>
                </div>
        </nav>
        </>
    )
}