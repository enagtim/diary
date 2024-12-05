import styles from './CardMemory.module.css';
import { ICardMemory } from './CardMemory.props';

function CardMemory({ title, date, description }: ICardMemory) {
	const dateToString = new Date(date).toLocaleDateString();
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles.footer}>
				<div className={styles.date}>{dateToString}</div>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}
export default CardMemory;
