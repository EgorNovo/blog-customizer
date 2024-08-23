import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Text } from '../text';
import { useCloseFormHook } from '../../hooks/useCloseFormHook';

import {
	fontColors,
	fontSizeOptions,
	fontFamilyOptions,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
	OptionType,
} from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

import { SyntheticEvent, useState } from 'react';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	setOptions: (option: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setOptions }: ArticleParamsFormProps) => {
	const { isOpen, setOpen, ref } = useCloseFormHook(false);

	const [articleSettings, setArticleSettings] = useState(defaultArticleState);

	const handleOnChange = (field: keyof ArticleStateType) => {
		return (value: OptionType) => {
			setArticleSettings((prevState) => ({ ...prevState, [field]: value }));
		};
	};

	function reset(): void {
		setOptions(defaultArticleState);
		setArticleSettings(defaultArticleState);
	}

	function submit(e: SyntheticEvent): void {
		setOptions(articleSettings);
		e.preventDefault();
	}

	return (
		<div ref={ref}>
			<ArrowButton isOpen={isOpen} setStateOpen={() => setOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, isOpen ? styles.container_open : '')}>
				<form className={styles.form} onSubmit={submit} onReset={reset}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={articleSettings.fontFamilyOption}
						options={fontFamilyOptions}
						title='ШРИФТ'
						onChange={handleOnChange('fontFamilyOption')}
					/>
					<RadioGroup
						name={fontSizeOptions[0].title}
						options={fontSizeOptions}
						selected={articleSettings.fontSizeOption}
						title='РАЗМЕР ШРИФТА'
						onChange={handleOnChange('fontSizeOption')}
					/>
					<Select
						selected={articleSettings.fontColor}
						options={fontColors}
						title='ЦВЕТ ШРИФТА'
						onChange={handleOnChange('fontColor')}
					/>
					<Separator />
					<Select
						selected={articleSettings.backgroundColor}
						options={backgroundColors}
						title='ЦВЕТ ФОНА'
						onChange={handleOnChange('backgroundColor')}
					/>
					<Select
						selected={articleSettings.contentWidth}
						options={contentWidthArr}
						title='ШИРИНА КОНТЕНТА'
						onChange={handleOnChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
