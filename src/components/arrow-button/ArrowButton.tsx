import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowButtonProps = {
	isOpen: boolean;
	setStateOpen: () => void;
};

export const ArrowButton = (props: ArrowButtonProps | any) => {
	const { setStateOpen, isOpen } = props;

	const OnClick: OnClick = () => {
		setStateOpen();
	};

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen ? styles.container_open : '')}
			onClick={OnClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen ? styles.arrow_open : '')}
			/>
		</div>
	);
};
