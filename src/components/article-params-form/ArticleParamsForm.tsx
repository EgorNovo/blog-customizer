import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';

import {
	fontColors,
	fontSizeOptions,
	fontFamilyOptions,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

import { SyntheticEvent, useState } from 'react';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	setOptions: (option: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setOptions }: ArticleParamsFormProps) => {
	const [isOpen, setOpen] = useState(false);

	const [fontFamily, setFontFamily] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState(
		defaultArticleState.contentWidth
	);

	function reset(): void {
		setOptions(defaultArticleState);
		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);
	}

	function submit(e: SyntheticEvent): void {
		const data = {
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		};

		setOptions(data);

		e.preventDefault();
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} setStateOpen={() => setOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, isOpen ? styles.container_open : '')}>
				<form className={styles.form} onSubmit={submit} onReset={reset}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamily}
						options={fontFamilyOptions}
						title='ШРИФТ'
						onChange={setFontFamily}
					/>
					<RadioGroup
						name={fontSizeOptions[0].title}
						options={fontSizeOptions}
						selected={fontSize}
						title='РАЗМЕР ШРИФТА'
						onChange={setFontSize}
					/>
					<Select
						selected={fontColor}
						options={fontColors}
						title='ЦВЕТ ШРИФТА'
						onChange={setFontColor}
					/>
					<Separator />
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						title='ЦВЕТ ФОНА'
						onChange={setBackgroundColor}
					/>
					<Select
						selected={contentWidth}
						options={contentWidthArr}
						title='ШИРИНА КОНТЕНТА'
						onChange={setContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
