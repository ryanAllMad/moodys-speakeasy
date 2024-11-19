import styles from '../app/page.module.css'

interface IconGroupProps {
	icon: React.ReactElement
	heading: string
	text: string
}

const IconGroup: React.FC<IconGroupProps>= ({icon, heading, text}) => {
	return <div className={styles.iconGroup}>
		<p style={{ fontSize: '5rem', paddingRight: '1rem'}}>{icon}</p>
		<div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center'}}>
		<h3>{heading}</h3>
		<p>{text}</p>
		</div>
	</div>
}

export default IconGroup