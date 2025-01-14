import React from 'react';

interface CardProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, onClick, children }) => (
  <div className={`border rounded-lg p-4 ${className}`} onClick={onClick}>
    {children}
  </div>
);

interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div className="border-b pb-2 mb-2">{children}</div>
);

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <div className="text-gray-600">{children}</div>
);

interface CardDescriptionProps {
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => (
  <p className="text-sm">{children}</p>
);

interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => (
  <div className="border-t pt-2 mt-2">{children}</div>
);
