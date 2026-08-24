import React from 'react';
import { Author } from '../content/blogPosts';

const RED_GRAD = "linear-gradient(135deg, rgb(217, 47, 97), rgb(143, 15, 56))";

interface AuthorAvatarProps {
  author: Author;
  size?: number;
}

// No real headshots on file, so avatars are initials-on-brand-gradient rather
// than a stock/placeholder photo that could misrepresent who wrote the post.
const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ author, size = 32 }) => (
  <div
    className="flex items-center justify-center rounded-full font-bold text-white flex-none"
    style={{
      width: size,
      height: size,
      fontSize: size * 0.4,
      background: RED_GRAD,
    }}
    aria-hidden="true"
  >
    {author.initials}
  </div>
);

export default AuthorAvatar;
