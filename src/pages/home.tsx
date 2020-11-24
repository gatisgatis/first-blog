import React, { useEffect, useState } from "react";
import Loading from "../components/loading/loading";
import Card from "../components/card/card";
import ScrollUp from "../components/scroll-top/scroll-top";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const RANDOM_NAMES: string[] = [
  "Breann Stout",
  "Bell Wenrich",
  "Christiane Campas",
  "Stephanie Labree",
  "Trenton Lynde",
  "Essie Tessier",
  "Nathanial Boyles",
  "Santo Reali",
  "Sherlyn Santi",
  "Jeremy Herlihy",
];

const Home = () => {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <section>
      <div className="container">
        <ScrollUp />
        <div className="row">
          <div className="col-12 d-flex justify-content-center margin-bottom--30">
            <h1>ALL POSTS</h1>
          </div>
        </div>
        <div className="row">
          {data.map(({ userId, id, title, body }) => {
            return (
              <div
                key={uuid()}
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xs-2 d-flex margin-bottom--30"
              >
                <Card
                  text={body}
                  title={title}
                  id={id}
                  image={`https://picsum.photos/id/${id * 2}/400/400`}
                  author={RANDOM_NAMES[userId - 1]}
                  onClick={() => history.push(`/blog/${id}`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
