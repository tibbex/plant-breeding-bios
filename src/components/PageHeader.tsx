
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-sage-800 sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
