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
	const [scrollTop, setScrollTop] = useState(300);
	const [shadow, setShadow] = useState('none');

	useEffect(() => {
		if (typeof window !== undefined) {
			const windowWidth = window.innerWidth
			window.addEventListener('scroll', () => {
				const scrollVal = window.scrollY;
				if (windowWidth < 999) {
					if (scrollVal <= 900) {
						setScrollTop(300 - scrollVal);
					} else {
						setScrollTop(-600)
					}
				} else {
					setScrollTop(300 - scrollVal);
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
					<button onClick={() => setShadow('none')} style={{ boxShadow: shadow }}>Menu</button>
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
						abs lsiru aieiue alifieafipeuf aoihfej alifieafipeuf
						aoihfej LSRgjhirjg aliefjuea aliefupaue aiefjpieu
						aiefpqe aiefjpwei alkgh pauf pojup9wue4 lskjhgoiu
						aoifp9uw gsjrg o8u gsjgrp sprug sjrg s9uf sirugpurg
						slhgr ssiu sprugps gpsrug spgu rpsiurg s psug{' '}
					</p>
          <p className="resLink">
            <a href="#"><ArrowForwardIosIcon />Make a reservation</a>
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
