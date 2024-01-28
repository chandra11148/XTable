import { useState } from "react";

function App() {
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [articles,setArticles] = useState(data);
  const sortByDate=()=>{
    const newArticles = [...data].sort((a,b)=>{
      const date1 = a.date.split("-");
      const date2 = b.date.split("-");
      if(parseInt(date1[0])>parseInt(date2[0])){
        return -1;
      }else if(parseInt(date1[0])<parseInt(date2[0])){
        return 1;
      }else{
        return b.views-a.views;
      }
    });
    setArticles(newArticles);
  }
  const sortByViews=()=>{
    
    const newArticles = [...data].sort((a,b)=>b.views-a.views);
    setArticles(newArticles);
  }
  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((element,idx)=>(
            
            <tr>
              <td>{element.date}</td>
              <td>{element.views}</td>
              <td>{element.article}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </>
  );
}

export default App;
