import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { getBlogPostBySlug, ContentBlock } from '../content/blogPosts';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const SITE_URL = 'https://vaptlabs.com';

const renderBlock = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={idx} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case 'p':
    default:
      return (
        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
          {block.text}
        </p>
      );
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const path = `/blog/${post.slug}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title={post.metaTitle}
        description={post.description}
        path={path}
        keywords={post.keywords}
        faqItems={post.faq}
        extraJsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.publishDate,
          dateModified: post.publishDate,
          author: { '@type': 'Organization', name: 'VAPTlabs', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'VAPTlabs', url: SITE_URL },
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        }}
      />
      <Header />

      <div className="relative text-white py-16" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, rgb(143,15,56) 100%)' }}>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.map(renderBlock)}

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faq.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <div className="py-16 text-white text-center" style={{ background: RED_GRAD }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready for AI-powered VAPT?</h2>
          <p className="text-lg text-white/90 mb-8">
            Get an audit-ready penetration testing report in hours, not weeks.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{ color: 'rgb(143,15,56)' }}
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
