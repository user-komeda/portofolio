import { createClient } from 'microcms-js-sdk'

const createMicroCmsClient = () => {
  const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.MICROCMS_API_KEY,
  })
  return client
}
export default createMicroCmsClient
