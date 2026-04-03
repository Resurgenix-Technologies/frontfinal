import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="breadcrumb reveal" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`}>
            {!isLast && item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
            )}
            {!isLast && <span> / </span>}
          </span>
        );
      })}
    </nav>
  );
}
