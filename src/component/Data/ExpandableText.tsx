import { useState } from 'react';
interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength = 200 }) => {
  const [showMore, setShowMore] = useState(false);
  const truncatedText = showMore ? text : text.slice(0, maxLength);
  
  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && !showMore && (
        <button onClick={() => setShowMore(true)}>see more details...</button>
      )}
    </div>
  );
};

export default ExpandableText;