import TestRenderer from 'react-test-renderer';
import { Article } from './article';

it('renders the component as expected', () => {
  const component = TestRenderer.create(<Article article={articles} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const articles = {
  source: { id: null, name: 'YouTube' },
  author: null,
  title: "Des data centers pour chauffer l'eau des immeubles - Tech & Co",
  description:
    'Le numérique est-il compatible avec la sobriété énergétique ? En région parisienne, l’entreprise Neutral-IT récupère la chaleur dégagée par ses data centers ...',
  url: 'https://www.youtube.com/watch?v=kaocfZmYQ9M',
  urlToImage: 'https://i.ytimg.com/vi/kaocfZmYQ9M/maxresdefault.jpg',
  publishedAt: '2023-01-15T06:01:34Z',
  content: null,
};
