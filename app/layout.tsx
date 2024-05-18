import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider,  } from '@clerk/nextjs'

import './globals.css'

import RootProviders from '@/components/providers/RootProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Budget Tracker',
	description: 'siema',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider >
			<html lang='en' className='dark' style={{colorScheme:'dark'}}>
				<body>
					<RootProviders>

					{children}
					</RootProviders>
				</body>
			</html>
		</ClerkProvider>
	)
}
