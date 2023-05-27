const Box = (props) => {
  //  Write your code here.
  const { classDiv, message } = props;
  return (
    <div className={classDiv}>
      <p className="text">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-card-container">
    <h1 class="heading">Boxes</h1>
    <div className="boxes-container">
      <Box classDiv="box small-box" message="small" />
      <Box classDiv="box medium-box" message="medium" />
      <Box classDiv="box large-box" message="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
