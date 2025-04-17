import { Contacts } from "./Contacts"
import { Card, Flex, Typography } from "antd"

export function MainHeader () {
	return (
		<header>
			<Flex justify='space-between'>
				<Card size='small' style={{ maxWidth: '50vw' }}>
					<Typography.Title>
						Tristan J. McNab
					</Typography.Title>
					<Typography.Text >
						A gregarious full-stack developer with a passion for building data-driven web applications using best practices/standards.
					</Typography.Text>
				</Card>
				<Contacts />
			</Flex>
		</header>
	)
}