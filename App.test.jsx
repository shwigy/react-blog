import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import Article from './src/components/Article';
import blog from './src/blog';

describe('App', () => {
  it('renders the blog name from props', () => {
    render(<App />);
    expect(screen.getByText(blog.name)).toBeInTheDocument();
  });

  it('renders the about text from props', () => {
    render(<App />);
    expect(screen.getByText(blog.about)).toBeInTheDocument();
  });

  it('renders one article per post in the blog data', () => {
    render(<App />);
    blog.posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });
});

describe('Article', () => {
  it('dynamically updates its content when props change', () => {
    const { rerender } = render(
      <Article title="First Title" date="2026-01-01" preview="First preview" />
    );
    expect(screen.getByText('First Title')).toBeInTheDocument();
    expect(screen.getByText('First preview')).toBeInTheDocument();

    rerender(
      <Article title="Second Title" date="2026-02-02" preview="Second preview" />
    );
    expect(screen.getByText('Second Title')).toBeInTheDocument();
    expect(screen.getByText('Second preview')).toBeInTheDocument();
    expect(screen.queryByText('First Title')).not.toBeInTheDocument();
  });
});
