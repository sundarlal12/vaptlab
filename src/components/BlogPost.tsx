import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Clock, ArrowLeft, CalendarDays } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import AuthorAvatar from './AuthorAvatar';
import BlogHeroGraphic from './BlogHeroGraphic';
import TableOfContents, { TocItem } from './TableOfContents';
import ExitIntentPopup from './ExitIntentPopup';
import { getBlogPostBySlug, blogPosts, ContentBlock, slugifyHeading } from '../content/blogPosts';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";
const SITE_URL = 'https://vaptlabs.com';

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/people/VAPTlabs-Cyber-Defense-RASP-solutions/61571086805016/', label: 'Facebook', Icon: FaFacebookF },
  { href: 'https://www.linkedin.com/company/vaptlabs/', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: 'https://www.instagram.com/vaptlabs', label: 'Instagram', Icon: FaInstagram },
];

const renderBlock = (block: ContentBlock, idx: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={idx}
          id={typeof block.text === 'string' ? slugifyHeading(block.text) : undefined}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28"
        >
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
    case 'image':
      return (
        <figure key={idx} className="my-8">
          {block.icon && <BlogHeroGraphic icon={block.icon} className="w-full aspect-[16/9] rounded-xl" />}
          {block.caption && (
            <figcaption className="mt-3 text-sm text-gray-500 text-center italic">{block.caption}</figcaption>
          )}
        </figure>
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

const InlineCTA: React.FC = () => (
  <div
    className="my-10 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between text-white"
    style={{ background: RED_GRAD }}
  >
    <div>
      <p className="text-lg font-bold mb-1">Need a VAPT report fast?</p>
      <p className="text-white/90">Talk to VAPTlabs about AI-powered penetration testing for your app, API or infrastructure.</p>
    </div>
    <Link
      to="/contact"
      className="flex-none inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105 whitespace-nowrap"
      style={{ color: 'rgb(143,15,56)' }}
    >
      Talk to Us
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const path = `/blog/${post.slug}`;
  const canonical = `${SITE_URL}${path}`;
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const midpoint = Math.ceil(post.content.length / 2);
  const firstHalf = post.content.slice(0, midpoint);
  const secondHalf = post.content.slice(midpoint);

  const tocItems: TocItem[] = post.content
    .filter((b) => b.type === 'h2' && typeof b.text === 'string')
    .map((b) => ({ id: slugifyHeading(b.text as string), label: b.text as string }));
  if (post.faq && post.faq.length > 0) {
    tocItems.push({ id: 'faq', label: 'Frequently Asked Questions' });
  }

  return (
    <div className="min-h-screen bg-white">
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
          author: { '@type': 'Person', name: post.author.name },
          publisher: { '@type': 'Organization', name: 'VAPTlabs', url: SITE_URL },
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        }}
      />
      <Header />

      <div className="relative text-white pt-24 pb-14" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, rgb(143,15,56) 100%)' }}>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-10">{post.title}</h1>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/15">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CalendarDays className="w-4 h-4" />
                {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <div className="flex items-center gap-2">
                <AuthorAvatar author={post.author} />
                <div>
                  <p className="text-sm font-bold leading-tight">{post.author.name}</p>
                  <p className="text-xs text-white/60 leading-tight">{post.author.role}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:items-end">
              <span className="text-xs font-bold tracking-widest uppercase text-white/60">Connect With Us</span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-8 h-8 grid place-items-center rounded-full border border-white/20 text-white/80 hover:border-white hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <BlogHeroGraphic icon={post.heroIcon} className="w-full aspect-[16/7] rounded-2xl shadow-lg" />
      </div>

      <div className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          {tocItems.length > 0 && (
            <>
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <TableOfContents items={tocItems} />
                </div>
              </aside>
              <div className="lg:hidden mb-10">
                <TableOfContents items={tocItems} />
              </div>
            </>
          )}

          <article className="max-w-3xl">
            {firstHalf.map(renderBlock)}
            <InlineCTA />
            {secondHalf.map((block, i) => renderBlock(block, midpoint + i))}

            {post.faq && post.faq.length > 0 && (
              <div id="faq" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-28">
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

            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
              <AuthorAvatar author={post.author} size={48} />
              <div>
                <p className="font-bold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-12">Related Blogs</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <BlogHeroGraphic icon={rp.heroIcon} className="aspect-[16/10] w-full group-hover:opacity-90 transition-opacity" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgb(217,47,97)' }}>
                      {new Date(rp.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <h4 className="mt-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-[rgb(217,47,97)] transition-colors line-clamp-2">
                      {rp.title}
                    </h4>
                    <p className="mt-3 flex-1 text-sm text-gray-500 leading-relaxed line-clamp-3">{rp.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

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
      <ExitIntentPopup />
    </div>
  );
};

export default BlogPost;
