import { HomeScreen } from "./HomeScreen";
import { customRender } from "@alura/test-commons/react-testing-library";
const render = customRender((props) => {
  return <section>{props.children}</section>;
});

describe("HOmeScreen", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
