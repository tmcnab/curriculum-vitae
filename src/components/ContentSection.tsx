import { Employment } from '../types/Employment'
import { Card, Flex, Tag, Typography } from 'antd'

export function ExperienceSection (props: Employment) {
	return (
		<Card size='small'>
			<Flex justify='space-between' >
				<Flex gap='small' align='start'>
					<Flex align='start' vertical>
						<Typography.Title level={2}>{props.title}</Typography.Title>
						<Flex align='end'>
							<strong>{props.dates.from} &mdash; {props.dates.to}</strong>
							{props.organization ? (
								<>
									<span>&nbsp;•&nbsp;</span>
									<Typography.Link href={props.organization.url}>{props.organization.name}</Typography.Link>
								</>
							) : null}
								
						</Flex>
					</Flex>
				</Flex>
				<Flex align='start'>
					{props.tags.map((value, index) => <Tag key={index}>{value}</Tag>)}
				</Flex>
			</Flex>
		</Card>
	)
}