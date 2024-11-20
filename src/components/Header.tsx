import { useState } from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	const [openMenu, setOpenMenu] = useState('none');
	return (
		<header className={styles.header}>
			<Image
				src='/moody-logo.png'
				width={135}
				height={80}
				alt='to home'
				className={styles.logo}
			/>
			<section className={styles.desktopMenu}>
				<nav aria-label='site navigation'>
				<ul>
					<li>Home</li>
					<li>
						<a
							target='_blank'
							href='https://www.figma.com/design/YMtzNcpy6LbiOuW0FayKQ1/Moody-Floral-Mood-Board?node-id=0-1&t=NX40WbUfGVuyUZdv-1'
						>
							Mood Board
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.figma.com/design/YMtzNcpy6LbiOuW0FayKQ1/Moody-Floral-Mood-Board?node-id=21-123&t=NX40WbUfGVuyUZdv-1'
						>
							Prototype
						</a>
					</li>
					<li>Code</li>
				</ul>
				</nav>
			</section>
			<section className={styles.mobileMenu}>
				<button className={styles.menuOpenButton} onClick={() => setOpenMenu('block')}><MenuIcon /><span className={styles.screenReaderText}>Open Site Navigation Menu</span></button>
				<div className={styles.openMenuDiv} style={{ display: openMenu }}>
				<button className={styles.closeMenu} onClick={() => setOpenMenu('none')}>X</button>
				<nav aria-label='site navigation'>
					<ul>
						<li>Home</li>
						<li>
							<a
								target='_blank'
								href='https://www.figma.com/design/YMtzNcpy6LbiOuW0FayKQ1/Moody-Floral-Mood-Board?node-id=0-1&t=NX40WbUfGVuyUZdv-1'
							>
								Mood Board
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href='https://www.figma.com/design/YMtzNcpy6LbiOuW0FayKQ1/Moody-Floral-Mood-Board?node-id=21-123&t=NX40WbUfGVuyUZdv-1'
							>
								Prototype
							</a>
						</li>
						<li>Code</li>
					</ul>
				</nav>
				</div>
			</section>
		</header>
	);
};

export default Header;
