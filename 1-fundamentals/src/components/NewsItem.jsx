const NewsItem = (props) => {
  return (
    <div className="news-item">
      <h3>{props.item.title}</h3>
      <div>{props.item.feed}</div>
    </div>
  );
};

export default NewsItem;
