export interface Employment 
{
	dates: {
		from: string
		to: string
	},
	description: string|null
	organization: {
		name: string
		url?: string
	} | null
	tags: string[]
	title: string
}