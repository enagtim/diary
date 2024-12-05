import styles from './ButtonAdd.module.css';

function ButtonAdd() {
	return (
		<button className={styles.button}>
			<img src="./assets/plus.icon.svg" alt="Иконка плюса" />
			Новое воспоминание
		</button>
	);
}
export default ButtonAdd;
