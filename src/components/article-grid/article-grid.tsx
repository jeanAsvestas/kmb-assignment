import './article-grid.scss';
import { Article } from '../article/article';
import { SearchBox } from '../../components/searchbox/search-box';
import { SortingMenu } from '../../components/sorting-menu/sorting-menu';
import { useEffect, useState } from 'react';
import type { ArticleInterface, SortingOption } from '../../model/main.types';
import { fetchArticles } from '../../services/articles';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ArticleGrid = () => {
  const [articles, setArticles] = useState<ArticleInterface[] | null>(null);
  const [page, setPage] = useState(1);
  const [sortingOption, setSortingOption] =
    useState<SortingOption>('newest-first');
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setArticles(fetchArticles(page, sortingOption, searchInput));
  }, [page, sortingOption, searchInput]);

  return (
    <>
      <div className="article-grid">
        <div className="article-filters">
          <SearchBox setSearchInput={setSearchInput} />
          <SortingMenu setSortingOption={setSortingOption} />
        </div>
        <div className="articles-container">
          {articles &&
            articles.map((article: ArticleInterface, i) => {
              return <Article article={article} key={i} />;
            })}
        </div>
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </>
  );
};
