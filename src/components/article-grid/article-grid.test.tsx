import TestRenderer from 'react-test-renderer';
import { ArticleGrid } from './article-grid';

it('renders the component as expected', () => {
  const component = TestRenderer.create(<ArticleGrid />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
