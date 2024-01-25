import renderer from 'react-test-renderer';
import ButtonTest from './button'
// import Link from '../Link';

it('this test should pass', () => {
  const component = renderer.create(
    <ButtonTest />,
  );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});