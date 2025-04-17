import './main.css'
import { createRoot } from 'react-dom/client'
import { ExperienceSection as Experience } from './components/Experience'
import { MainHeader } from './components/MainHeader'
import { StrictMode } from 'react'
import data from './data.json'
import { Flex } from 'antd'
import { Employment } from './types/Employment'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Flex gap='small' vertical>
			<MainHeader />
			<main>
				<Flex gap='small' vertical>
					{data.experience.map((item, index) =>
						<Experience key={`section-${index}`} {...item as Employment} />
					)}
				</Flex>
			</main>
		</Flex>
	</StrictMode>
)
