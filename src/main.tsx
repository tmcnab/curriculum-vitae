import './main.css'
import { createRoot } from 'react-dom/client'
import { ExperienceSection } from './components/ContentSection'
import { MainHeader } from './components/MainHeader'
import { StrictMode } from 'react'
import data from './data.json'
import { Flex } from 'antd'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainHeader />
		<main>
			<Flex gap='small' vertical>
			{data.experience.map((item, index) => 
				<ExperienceSection key={`section-${index}`} {...item} />
			)}
			</Flex>
		</main>
	</StrictMode>
)
