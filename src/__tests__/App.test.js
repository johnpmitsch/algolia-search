import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Using nock to mock http requests that come from third-party library
const nock = require('nock');
const searchFixture = require('./searchFixture.json');

// Disable outside http connections, only use mocks
nock.disableNetConnect();

const url = 'https://i1cqoys68c-dsn.algolia.net/';
const path = '/1/indexes/stg_choicemarket_products/query';

let data;
beforeEach(() => {
  data = searchFixture.hits;
});

afterEach(() => {
  nock.cleanAll();
});

test('Can search and display items', async () => {
  const scope = nock(url).post(path).query(true).reply(200, searchFixture);

  const { getByText, getByLabelText } = render(<App />);

  // Find search bar
  const inputElement = getByLabelText(/search bar/i);
  expect(inputElement).toBeInTheDocument();

  await waitFor(() => {
    // Start searching
    fireEvent.change(inputElement, { target: { value: 'a' } });
    // Check first name is now showing
    const name = data[0]['Name'];
    expect(getByText(name)).toBeInTheDocument();
  });

  // API call was made
  scope.isDone();
});

test('Can handle empty response', async () => {
  const scope = nock(url).post(path).query(true).reply(200, { hits: [] });

  const { getByText, getByLabelText } = render(<App />);
  const inputElement = getByLabelText(/search bar/i);
  expect(inputElement).toBeInTheDocument();

  await waitFor(() => {
    fireEvent.change(inputElement, { target: { value: 'a' } });
    expect(getByText(/No results found/)).toBeInTheDocument();
  });

  scope.isDone();
});

test('Can handle errored API call', async () => {
  const scope = nock(url).post(path).query(true).replyWithError('error!');

  const { getByText, getByLabelText } = render(<App />);
  const inputElement = getByLabelText(/search bar/i);
  expect(inputElement).toBeInTheDocument();

  await waitFor(() => {
    fireEvent.change(inputElement, { target: { value: 'a' } });
    expect(getByText(/something went wrong/i)).toBeInTheDocument();
  });

  scope.isDone();
});
