import { ofetch } from 'ofetch'

const SEARCH_TERM = 'h'

const data = JSON.parse(
  await ofetch('https://itunes.apple.com/search', {
    query: { limit: 200, media: 'software', term: SEARCH_TERM },
  }),
)
for (const bundleId of data.results.map(_ => _.bundleId)) {
  console.log(bundleId)
}
