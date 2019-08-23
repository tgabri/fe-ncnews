import React from 'react';
import ArticlesList from './ArticlesList';

export default function HomePage() {
  return (
    <div>
      HOMEPAGE
      <ArticlesList path='articles/' />
    </div>
  );
}
