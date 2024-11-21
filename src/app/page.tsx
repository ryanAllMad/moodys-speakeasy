'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import Header from '@/components/Header';
import IconGroup from '@/components/IconGroup';
import AnimateSection from '../components/AnimateSection';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
	const [scrollTop, setScrollTop] = useState(180);
	const [shadow, setShadow] = useState('none');

	useEffect(() => {
		if (typeof window !== undefined) {
			const windowWidth = window.innerWidth;
			window.addEventListener('scroll', () => {
				const scrollVal = window.scrollY;
				if (windowWidth < 999) {
					if (scrollVal <= 900) {
						setScrollTop(180 - scrollVal);
					} else {
						setScrollTop(-780);
					}
				} else {
					setScrollTop(180 - scrollVal);
				}
			});
		}
	}, []);
	useEffect(() => {
		if (scrollTop < 260) {
			setShadow('5px 5px 20px #F9E6BA');
		} else {
			setShadow('none');
		}
	}, [scrollTop]);
	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<section className={styles.sectionMainOne}>
					<h1>Welcome to Moody&apos;s Floral Speakeasy</h1>
					<button
						onClick={() => setShadow('none')}
						style={{ boxShadow: shadow }}
					>
						Menu
					</button>
				</section>
				<section className={styles.sectionMainTwo}>
					<Image
						className={styles.image}
						src='/drinks1.png'
						alt='2 moody signature cocktails'
						width={700}
						height={700}
					/>
				</section>
				<section className={styles.sectionMainThree}>
					<Image
						className={styles.floralBorder}
						style={{ transform: `translateY(${scrollTop}px)` }}
						src='/moodyborder.png'
						alt=''
						width={1000}
						height={1000}
					/>
				</section>
				<section className={styles.sectionMainFour}>
					<Image
						className={styles.image}
						src='/drinks2.png'
						alt='2 moody signature cocktails'
						width={550}
						height={550}
					/>
				</section>
				<AnimateSection classes={styles.sectionMainFive}>
					<h2>Our Story</h2>
					<p>
						I developed the application by creating a mood board,
						then a ux design, and then a prototype in Figma.
						Following that I built the Next.js app and deployed it
						to Vercel. The entire process took 2 days. The front end
						application features light and dark mode, CSS
						Transitions, and scroll animations. The app was built
						with NextJS, Typescript, React, and CSS3.{' '}
					</p>
					<p className='resLink'>
						<a href='#'>
							<ArrowForwardIosIcon />
							Make a reservation
						</a>
					</p>
				</AnimateSection>
				<AnimateSection classes={styles.sectionMainSix}>
					<IconGroup
						icon={<LocationOnIcon sx={{ fontSize: '5rem' }} />}
						heading='Location'
						text='1234 Blackberry rd.'
					/>
					<IconGroup
						icon={<AccessTimeIcon sx={{ fontSize: '5rem' }} />}
						heading='Open Hours'
						text='1:00pm - 2:00am'
					/>
					<IconGroup
						icon={<CallIcon sx={{ fontSize: '5rem' }} />}
						heading='Reservations'
						text='999-999-9999'
					/>
				</AnimateSection>
			</main>
		</div>
	);
}
