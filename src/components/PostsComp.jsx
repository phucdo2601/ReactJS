import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Input } from "semantic-ui-react";

const PostsComp = () => {
  const [APIData, setAPIData] = useState([]);
  const [filtererResults, setFiltererResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getAllUsers = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          setAPIData(res.data);
        })
        .catch((err) => {
          console.log(err.toString());
        });
    };

    getAllUsers();
  }, []);

  const searchItems = (searchValue) => {
    localStorage.setItem('searchValue', "Search Content");
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFiltererResults(filteredData);
    } else {
      setFiltererResults(APIData);
    }
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />

        <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
          {searchInput.length > 1
            ? filtererResults.map((item) => (
                <>
                  <Card>
                    <Card.Content>
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Description>{item.email}</Card.Description>
                    </Card.Content>
                  </Card>
                </>
              ))
            : APIData.map((item) => (
                <>
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Description>{item.email}</Card.Description>
                  </Card.Content>
                </>
              ))}
        </Card.Group>
      </div>
    </>
  );
};

export default PostsComp;
