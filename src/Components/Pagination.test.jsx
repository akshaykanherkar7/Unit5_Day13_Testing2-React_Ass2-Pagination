import {render,screen,fireEvent} from "@testing-library/react"
import App from "../App";
import Pagination from "./Pagination";

describe("Test Pagination", ()=> {
    it("Should change page by one", ()=> {
        render(<App>Next</App>);

        let h3 = screen.getByTestId("page")
        expect(h3).toHaveTextContent(0);

        // let btnNext = screen.getByText("Next");
        // fireEvent.click(btnNext);
        // expect(h3).toHaveTextContent(+1)
    })

//     it("sould call the given function for add btn", () => {
//         const mockfn = jest.fn();
    
//         render(<Pagination onClickAdd={mockfn}></Pagination>);
    
//         const addbtn = screen.getByTestId("btn");
//         fireEvent.click(addbtn);
    
//         expect(mockfn).toBeCalled();
//       });

it("should have Next button in dom", () => {
    render(<App>Next</App>); //vertually
    let button = screen.getByText("Next"); //document
    expect(button).toBeInTheDocument();
  });

it("should have Prev button in dom", () => {
    render(<App>Prev</App>); //vertually
    let button = screen.getByText("Prev"); //document
    expect(button).toBeInTheDocument();
  });

  it("should render empty button", () => {
    render(<Pagination></Pagination>);
    let button = screen.getByTestId("btn");
    expect(button).toBeEmptyDOMElement();
  });

  it("should call the given Next function", () => {
    const mockfn = jest.fn();

    render(<Pagination handleOnClickInc={mockfn}></Pagination>);

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);
    // fireEvent.click(btn);

    expect(mockfn).toBeCalled();
    // expect(mockfn).toBeCalledTimes(2);
  });

  it("should call the given Prev function", () => {
    const mockfn = jest.fn();

    render(<Pagination handleOnClickDecr={mockfn}></Pagination>);

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);
    // fireEvent.click(btn);

    expect(mockfn).toBeCalled();
    // expect(mockfn).toBeCalledTimes(2);
  });
})