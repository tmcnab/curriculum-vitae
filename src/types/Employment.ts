import { Nullable } from "./Nullable"
import { Organization } from "./Organization"

export interface Employment {
	dates: {
		from: string
		to: string
	},
	description: Nullable<string>
	organization: Nullable<Organization>
	location: Nullable<string>
	tags: string[]
	title: string
}