import type { MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk'
import createMicroCmsClient from '../utils/createMicroCms'

export type Portfolio = {
  title: string
  description: string
  tag: Array<string>
  url: string
  image: {
    url: string
    height: number
    width: number
  }
  githubUrl: string
} & MicroCMSListContent

const getPortfolioList = async (queries?: MicroCMSQueries) => {
  const client = createMicroCmsClient()
  return await client.getList<Portfolio>({ endpoint: 'portfolio', queries })
}
export default getPortfolioList
