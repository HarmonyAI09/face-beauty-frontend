const Item = (props) => {
  return (
    <div className="item">
      <i className="fa-solid fa-check item-header" />
      &nbsp;
      {props.text}
    </div>
  );
};

export default Item;