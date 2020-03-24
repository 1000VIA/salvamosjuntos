import Head from 'next/head'

import { ReactNode } from 'react'

type Props = {
  title: string
  description?: any
  children: ReactNode
}

export default function PageContainer({ title, description, children }: Props) {
  return (
    <div>
      <Head>
        <title>{title || 'Project X - The best fking project'}</title>
        {description !== false && (
          <meta name="description" content={description || 'Project X, from xTeam '} />
        )}
      </Head>
      {children}
    </div>
  )
}
