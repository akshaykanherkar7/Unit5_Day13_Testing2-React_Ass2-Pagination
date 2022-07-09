import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Pagination from "./Components/Pagination";
import axios from "axios";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  console.log("totalCount:", totalCount);
  const fetchData = (page) => {
    axios
      .get(`http://localhost:8080/quetions?_page=${page}&_limit=1`)
      .then((res) => {
        setTotalCount(Number(res.headers["x-total-count"]));
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePrev = () => {
    setPage(page - 1)
  }

  return (
    <div className="App">
      <h3 data-testid="page">Q: {page}</h3>
      <div>
        {data.map((el) => (
          <div key={el.id}>
            <div>{el.question}</div>
            <div>Ans: {el.answer}</div>
          </div>
        ))}
      </div>
      <Pagination
        data-testid="btn"
        handleOnClickInc={() => handlePrev()}
        disabledPrev={page <= 1}
      >
        Prev
      </Pagination>
      <Pagination
        data-testid="btn"
        disabledNext={totalCount <= page}
        handleOnClickDecr={() => setPage(page + 1)}
      >
        Next
      </Pagination>
    </div>
  );
}

export default App;
