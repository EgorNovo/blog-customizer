import { useEffect, useRef, useState } from 'react';

export function useCloseFormHook(initialState = false) {
	const [state, setState] = useState(initialState);
	const ref = useRef(null);

	const handleClick = (e: MouseEvent) => {
		if (ref.current && !(ref.current as any).contains(e.target) && state) {
			setState(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	});

	return { isOpen: state, setOpen: setState, ref };
}
