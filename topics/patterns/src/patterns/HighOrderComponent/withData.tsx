import React from "react";

const withData =
  (WrappedComponent: React.FC<{ data: any }>) =>
  ({ ...props }) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);

    return (
      <>
        {data !== null ? (
          <WrappedComponent data={data} {...props} />
        ) : (
          <div>"Loading..."</div>
        )}
      </>
    );
  };
export default withData;
