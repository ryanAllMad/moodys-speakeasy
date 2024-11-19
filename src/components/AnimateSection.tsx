'use-client'
import { useEffect, useRef } from "react";

interface AnimateSectionProps {
	children: React.ReactNode
	classes: string
}

const AnimateSection: React.FC<AnimateSectionProps> = ({children, classes}) => {
	const groupRef = useRef(null) as React.MutableRefObject<null>
	const handleOnScroll = () => {
		const observe = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate')
				} else {
					entry.target.classList.remove('animate')
				}
			});
		});
		// @ts-expect-error - refs are the worst
		return observe.observe(groupRef.current);
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('scroll', handleOnScroll)
		}
	}, []);
	return <section className={classes} ref={groupRef}>
		{children}
	</section>
}

export default AnimateSection