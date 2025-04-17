import { Employment } from '../types/Employment'
import { Flex, Tag, Typography } from 'antd'

export function EmploymentSection (props: Employment) {
	return (
		<section>
			<Flex justify='space-between'>
				<Flex gap='small' align='start'>
					<Flex align='start' vertical>
						<Typography.Title level={2}>{props.title}</Typography.Title>
						<Typography.Title level={2}>
							<Typography.Link href={props.organization.url}>{props.organization.name}</Typography.Link>
						</Typography.Title>
					</Flex>
				</Flex>
				<Flex align='start'>
					{props.tags.map((value, index) => <Tag key={index}>{value}</Tag>)}
				</Flex>
			</Flex>
		</section>
	)
}