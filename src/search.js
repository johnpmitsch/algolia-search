import algoliasearch from 'algoliasearch/lite';

const appId = process.env.REACT_APP_ALGOLIA_APPLICATION_ID
const appKey = process.env.REACT_APP_ALGOLIA_SECRET_KEY
const client = algoliasearch(appId, appKey);
const index = client.initIndex('stg_choicemarket_products');

const search = (query, resultsCallback, errorCallback) => {
  index
    .search(query)
    .then(({ hits }) => resultsCallback(hits))
    .catch((error) => errorCallback(`Something went wrong! ${error}`));
};

export default search;
