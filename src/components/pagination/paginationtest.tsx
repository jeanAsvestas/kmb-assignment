import renderer from 'react-test-renderer';
import { PaginationComp } from './pagination';

it('renders the component as expected', () => {
  const component = renderer.create(<PaginationComp />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
