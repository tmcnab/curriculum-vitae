import { Employment } from '../types/Employment'
import { Card, Flex, Tag, Typography } from 'antd'
import ReactMarkdown from 'react-markdown'

function Dot() {
	return <span>&nbsp;•&nbsp;</span>
}

export function ExperienceSection(props: Employment) {
	return (
		<Card size='small'>
			<header>
				<Flex align='start' vertical>
					<Typography.Title level={2}>{props.title}</Typography.Title>
					<Flex align='end'>
						<strong>{props.dates.from}&ndash;{props.dates.to}</strong>
						{props.organization ? (
							<>
								<Dot />
								{props.organization.url ?
									<Typography.Link href={props.organization.url}>{props.organization.name}</Typography.Link>
									: props.organization.name

								}
							</>
						) : null}
						{props.location && <>
							<Dot />
							<span>{props.location}</span>
						</>}
					</Flex>
				</Flex>
			</header>
			<div>
				<ReactMarkdown>{props.description}</ReactMarkdown>
			</div>
			<footer>
				{props.tags.map((value, index) => <Tag key={index}>{value}</Tag>)}
			</footer>
		</Card>
	)
}