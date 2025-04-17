import './main.css'
import { createRoot } from 'react-dom/client'
import { EmploymentSection } from './components/EmploymentSection'
import { MainHeader } from './components/MainHeader'
import { StrictMode } from 'react'
import data from './data.json'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainHeader />
		<main>
			{data.employment.map((item, index) => 
				<EmploymentSection key={`employment-section-${index}`} {...item} />
			)}
		</main>
	</StrictMode>
)
