import React from 'react'
import s from './Button.module.scss'

export const Button = ({label = "click", onClick = () => {}}) => {
	

	return (
		<button className={s.button} onClick={onClick}>{label}</button>
	)
}
