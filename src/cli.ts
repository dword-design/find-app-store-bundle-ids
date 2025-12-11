import { ofetch } from 'ofetch';

const SEARCH_TERM = 'h';
interface Product {
  bundleId: string;
}

const { results } = JSON.parse(
  await ofetch('https://itunes.apple.com/search', {
    query: { limit: 200, media: 'software', term: SEARCH_TERM },
  }),
) as { results: Array<Product> };

for (const bundleId of results.map(product => product.bundleId)) {
  console.log(bundleId);
}
