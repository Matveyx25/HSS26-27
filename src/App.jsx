import React, { useState } from 'react'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { Playground } from './components/Playground/Playground'
import { Player } from './components/Player/Player'

export const App = () => {
	const [top, setTop] = useState(0)
	const [left, setLeft] = useState(0)

	const onBottom = () => {
		setTop(prev => prev + 10)
	} 

	return (
		<div>
			<Playground/>
			<Player top={top} left={left}/>

			<Button label="up"/>
			<Button label="left"/>
			<Button label='right'/>
			<Button label="bottom" onClick={onBottom}/>
		</div>
	)
}