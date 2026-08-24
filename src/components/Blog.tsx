import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import AuthorAvatar from './AuthorAvatar';
import BlogHeroGraphic from './BlogHeroGraphic';
import { blogPosts } from '../content/blogPosts';

const RED_GRAD = "linear-gradient(to right, rgb(217, 47, 97), rgb(143, 15, 56))";

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="VAPT Blog — Guides on Vulnerability Assessment & Penetration Testing"
        description="Guides on what VAPT is, how the process works, and what it costs — straight answers from VAPTlabs' AI-powered penetration testing team."
        path="/blog"
        keywords="vapt blog, what is vapt, how to do vapt, vapt pricing, vapt guide"
      />
      <Header />

      <div className="relative text-white py-20" style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, rgb(143,15,56) 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">VAPTlabs Blog</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Straight answers on vulnerability assessment and penetration testing — what it is, how it works, and what it costs.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <BlogHeroGraphic icon={post.heroIcon} className="w-full sm:w-64 aspect-[16/10] sm:aspect-auto flex-none" />
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[rgb(217,47,97)] transition-colors">{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <AuthorAvatar author={post.author} size={28} />
                      <span className="text-sm font-semibold text-gray-700">{post.author.name}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 font-semibold" style={{ color: 'rgb(217,47,97)' }}>
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

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

export default Blog;
