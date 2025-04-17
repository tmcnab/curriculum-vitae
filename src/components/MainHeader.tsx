import { Flex, Typography } from "antd"
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"

export function MainHeader () {
	return (
		<header>
			<Flex justify='space-between' align='center'>
				<Typography.Title>
					Tristan J. McNab
				</Typography.Title>
				<section style={{fontWeight: 'bold' }}>
					<Flex gap='small'>
						<MailOutlined />
						<Typography.Link href='mailto:tristan.j.mcnab@gmail.com'>tristan.j.mcnab@gmail.com</Typography.Link>
					</Flex>
					<Flex gap='small'>
						<PhoneOutlined />
						<Typography.Link href='tel:321-978-6525'>321-978-6525</Typography.Link>
					</Flex>
					<Flex gap='small'>
						<GithubOutlined />
						<Typography.Link href='https://github.com/tmcnab'>@tmcnab</Typography.Link>
					</Flex>
					<Flex gap='small'>
						<LinkedinOutlined />
						<Typography.Link href='https://www.linkedin.com/in/tmcnab/'>@tmcnab</Typography.Link>
					</Flex>
				</section>
			</Flex>
		</header>
	)
}