import { CSSProperties, useState } from 'react';
import { ArticleParamsForm } from './components/article-params-form';
import { Article } from './components/article';
import clsx from 'clsx';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';
import styles from './styles/index.module.scss';

export const App = () => {
	const [options, setOptions] = useState<ArticleStateType>(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': options.fontFamilyOption.value,
					'--font-size': options.fontSizeOption.value,
					'--font-color': options.fontColor.value,
					'--container-width': options.contentWidth.value,
					'--bg-color': options.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setOptions={setOptions} />
			<Article />
		</div>
	);
};
