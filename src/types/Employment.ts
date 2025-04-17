export interface Employment 
{
	dates: {
		from: string
		to: string
	},
	organization: {
		name: string
		url?: string
	}
	tags: string[]
	title: string
}