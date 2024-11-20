import Image from 'next/image';
import styles from '../app/page.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Image
				src='/moody-logo.png'
				width={135}
				height={80}
				alt='to home'
			/>
			<section className={styles.desktopMenu}>
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
			</section>
		</header>
	);
};

export default Header;
