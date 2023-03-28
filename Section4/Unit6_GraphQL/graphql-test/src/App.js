import "./App.css";
import { graphql } from "@octokit/graphql";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import styled from "styled-components";

const agoraData = async () => {
  const GITTOKKEN = process.env.REACT_APP_TOKEN;
  const { viewer, repository } = await graphql(
    `
      {
        viewer {
          login
        }
        repository(name: "agora-states-fe", owner: "codestates-seb") {
          discussions(first: 100) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  login
                  avatarUrl
                }
                category {
                  name
                }
                answer {
                  author {
                    login
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `bearer ${GITTOKKEN}`,
      },
    }
  );
  return { viewer, repository };
};

function App() {
  const [soulhn, setSoulhn] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    agoraData()
      .then((res) => {
        setSoulhn(res.viewer.login);
        setData(res.repository.discussions.edges);
        setIsLoading(false);
      })
      .catch((err) => console.log(Error, err));
  }, []);

  return (
    <div className="App">
      <div>Hello agorastates</div>
      <Nav soulhn={soulhn}> </Nav>
      <ul>
        {isLoading
          ? "loading..."
          : data.map((edge) => {
              return (
                <EagesContainer key={edge.node.id}>
                  <EagesImg src={edge.node.author.avatarUrl} alt={`avatar of ${edge.node.author.login}`} />
                  <EagesName>{`[${edge.node.category.name}]`}</EagesName>
                  <a href={edge.node.url}>{edge.node.title}</a>
                  <p>{edge.node.answer ? "☑" : "☒"}</p>
                </EagesContainer>
              );
            })}
      </ul>
    </div>
  );
}

export default App;

const EagesContainer = styled.li`
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
  & > * {
  }
`;

const EagesName = styled.div`
  display: flex;
  list-style-type: none;
  color: black;
`;

const EagesImg = styled.img`
  height: 150px;
  width: 150px;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled.div`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
`;
