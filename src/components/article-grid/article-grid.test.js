import renderer from 'react-test-renderer';
import { ArticleGrid } from './article-grid';

it('renders the component as expected', () => {
  const component = renderer.create(<ArticleGrid />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
