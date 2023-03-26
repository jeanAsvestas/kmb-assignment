import { articles } from './data';
import { ArticleInterface } from '../model/main.types';
import { orderBy, groupBy, flatMap } from 'lodash';

export const fetchArticles = (
  pageNumber = 1,
  sortingOption = 'newest-first',
  searchInput = '',
  limit = 6
): ArticleInterface[] => {
  let pageResults: ArticleInterface[] = [];

  const searchResults = searchInput
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : articles;

  if (sortingOption === 'oldest-first') {
    pageResults = orderBy(searchResults, ['publishedAt'], 'asc');
  } else if (sortingOption === 'newest-first') {
    pageResults = orderBy(searchResults, ['publishedAt'], 'desc');
  } else if (sortingOption === 'grouped-source') {
    pageResults = flatMap(groupBy(searchResults, 'source.name'));
  }

  const offset = (pageNumber - 1) * limit;
  return pageResults.slice(offset, offset + limit);
};
