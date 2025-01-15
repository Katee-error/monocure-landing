import React from 'react';

interface Props {
  className?: string;
}

export const BeforeAfter: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}></div>
  );
};