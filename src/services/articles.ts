import { articles } from './data';
import { ArticleInterface } from '../model/main.types';
import { orderBy, groupBy, flatMap } from 'lodash';

export const fetchArticles = (
  pageNumber = 1,
  sortingOption = 'newest-first',
  limit = 6
): ArticleInterface[] => {
  let pageResults: ArticleInterface[] = [];
  if (sortingOption === 'oldest-first') {
    pageResults = orderBy(articles, ['publishedAt'], 'asc');
  } else if (sortingOption === 'newest-first') {
    pageResults = orderBy(articles, ['publishedAt'], 'desc');
  } else if (sortingOption === 'grouped-source') {
    pageResults = flatMap(groupBy(pageResults, 'source.name'));
  }
  const offset = (pageNumber - 1) * limit;
  return pageResults.slice(offset, offset + limit);
};
