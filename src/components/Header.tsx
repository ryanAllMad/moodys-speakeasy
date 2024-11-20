import { useState } from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from './Nav';

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
				<Nav />
			</section>
			<section className={styles.mobileMenu}>
				<button
					className={styles.menuOpenButton}
					onClick={() => setOpenMenu('block')}
				>
					<MenuIcon />
					<span className={styles.screenReaderText}>
						Open Site Navigation Menu
					</span>
				</button>
				<div
					className={styles.openMenuDiv}
					style={{ display: openMenu }}
				>
					<button
						className={styles.closeMenu}
						onClick={() => setOpenMenu('none')}
					>
						X
					</button>
					<Nav />
				</div>
			</section>
		</header>
	);
};

export default Header;
