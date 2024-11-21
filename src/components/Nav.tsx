import Link from 'next/link';

const Nav = () => {
	return (
		<nav aria-label='site navigation'>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
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
						Design
					</a>
				</li>
				<li>
					<a
						href='https://github.com/ryanAllMad/moodys-speakeasy'
						target='_blank'
					>
						Code
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
