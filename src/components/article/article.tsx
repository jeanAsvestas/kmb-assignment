import './article.scss';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import type { ArticleInterface } from '../../model/main.types';

export const Article = (props: { article: ArticleInterface }) => {
  const { article } = props;
  return (
    <div className="article">
      <img
        className="article-image"
        src={
          article.urlToImage ??
          'https://www.shutterstock.com/image-vector/blank-image-placeholder-icon-design-600w-1715514199.jpg'
        }
        alt="poster"
      />
      <h1>{article.publishedAt}</h1>
      <h2>{article.source.name}</h2>
      <p>{article.title}</p>
      <div>
        <LocalOfferIcon />
        <span>${article.author}</span>
      </div>
    </div>
  );
};
