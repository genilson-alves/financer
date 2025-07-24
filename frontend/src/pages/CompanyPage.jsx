import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CompanyPage() {
  const [companyData, setCompany] = useState(null);
  const [companyNews, setNews] = useState([]);
  const { ticker } = useParams();

  useEffect(() => {
    const fetchCompanyData = async () => {
      const response = await fetch(`http://localhost:8000/stock/${ticker}`);
      const data = await response.json();
      setCompany(data);
    };

    const fetchCompanyNews = async () => {
      const response = await fetch(`http://localhost:8000/news/${ticker}`);
      const data = await response.json();
      setNews(data);
    };

    fetchCompanyData();
    fetchCompanyNews();
  }, [ticker]);

  if (!companyData || !companyNews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {companyData.shortName} ({companyData.symbol})
      </h1>
      <p>{companyData.longBusinessSummary}</p>
      <h2>News</h2>
      <ul>
        {companyNews.map((article) => (
          <li key={article.id}>
            <a
              href={article.content.canonicalUrl.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.content.title}
            </a>
            <p>{article.content.publisher}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
