import React from 'react'
import s from './style.module.scss'

export const Player = ({top = 0, left = 0}) => {
	return (
		<div className={s.player} style={{top, left}}></div>
	)
}
