import Prismic from '@prismicio/client'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  hrefResolver
} from 'prismic-configuration'

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <a key={element.data.id} href={hrefResolver(element.data)} as={linkResolver(element.data)}>
    {content}
  </a>
)

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export default Client
