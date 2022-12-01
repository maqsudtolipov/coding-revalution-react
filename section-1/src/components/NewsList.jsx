import NewsItem from "./NewsItem";

const NewsList = (props) => {
  const news = props.news.map((item) => <NewsItem key={item.id} item={item} />);

  return <>{news}</>;
};

export default NewsList;
