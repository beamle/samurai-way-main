import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe('ProfileStatus component', function () {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus userId={1} status={"important news"} updateUserStatusTC={() => {
        }}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("important news")
    });

    test("after creation span should be defined", () => {
        const component = create(<ProfileStatus userId={1} status={"important news"} updateUserStatusTC={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span).toBeDefined();
    });

    test("after creation span should be displayed with correct Status", () => {
        const component = create(<ProfileStatus userId={1} status={"important news!!!"} updateUserStatusTC={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span.props.children).toBe("important news!!!")
    });

    test("in the absence of span '---' should be displayed ", () => {
        const component = create(<ProfileStatus userId={1} status={""} updateUserStatusTC={() => {
        }}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span.props.children).toBe("---")
    });

    test("input should be defined in edit mode, span not", () => {
        const component = create(<ProfileStatus userId={1} status={"some"} updateUserStatusTC={() => {
        }}/>);
        const root = component.root;
        const span = root.findByType("span");

        // Simulate double-click to activate edit mode
        span.props.onDoubleClick();
        const input = root.findByType("input");

        expect(input).toBeDefined();
        expect(() => root.findByType("span")).toThrow();

    });

    test("input should not be after creation of component but span should", () => {
        const component = create(<ProfileStatus userId={1} status={"some"} updateUserStatusTC={() => {
        }}/>);
        const root = component.root;

        expect(() => root.findByType("input")).toThrow(); // throw error if element doesn't exist
        expect(() => root.findByType("span")).not.toBeNull();
    });


    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus userId={1} status={"some"} updateUserStatusTC={mockCallback}/>);
        const root = component.root;

        // Activate edit mode (double-click)
        const span = root.findByType("span");
        span.props.onDoubleClick();

        // Deactivate edit mode to trigger the callback
        const input = root.findByType("input");
        input.props.onBlur();

        // Check if the callback was called once
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});