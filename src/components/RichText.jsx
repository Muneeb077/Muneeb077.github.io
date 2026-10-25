import React from 'react'
import Placeholder from './Placeholder'
import { PLACEHOLDER_PATTERN, isPlaceholder } from '../lib/placeholder'

// Renders a data string, wrapping "[...]" segments in <Placeholder> and an
// optional highlight substring in <strong>.
const RichText = ({ text, highlight }) => {
  if (!text) return null;

  return text.split(PLACEHOLDER_PATTERN).map((part, idx) => {
    if (isPlaceholder(part)) {
      return <Placeholder key={idx}>{part}</Placeholder>;
    }
    if (highlight && part.includes(highlight)) {
      const [before, ...rest] = part.split(highlight);
      return (
        <React.Fragment key={idx}>
          {before}
          <strong className="text-text font-semibold">{highlight}</strong>
          {rest.join(highlight)}
        </React.Fragment>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

export default RichText
