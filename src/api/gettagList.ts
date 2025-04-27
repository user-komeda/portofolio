import type { MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk'
import createMicroCmsClient from '../utils/createMicroCms'

export type TagList = {
  tag: string
  level: number
} & MicroCMSListContent

const getTagList = async (queries?: MicroCMSQueries) => {
  const client = createMicroCmsClient()
  return await client.getList<TagList>({
    endpoint: 'tags',
    queries,
  })
}
export default getTagList
