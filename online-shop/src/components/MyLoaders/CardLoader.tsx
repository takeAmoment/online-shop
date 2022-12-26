import ContentLoader from "react-content-loader";
import React from "react";

const CardLoader = () => {
  return (
    <div className="products">
      <ContentLoader width="320px" height="400px" viewBox="0 0 150 200">
        {/* Only SVG shapes */}
        <rect x="30" y="0" rx="5" ry="5" width="80" height="100" />
        <rect x="0" y="120" rx="4" ry="4" width="140" height="10" />
        <rect x="0" y="140" rx="4" ry="4" width="140" height="10" />
        <rect x="0" y="140" rx="4" ry="4" width="140" height="10" />
      </ContentLoader>
      <ContentLoader width="320px" height="400px" viewBox="0 0 150 200">
        {/* Only SVG shapes */}
        <rect x="30" y="0" rx="5" ry="5" width="80" height="100" />
        <rect x="0" y="120" rx="4" ry="4" width="140" height="10" />
        <rect x="0" y="140" rx="4" ry="4" width="140" height="10" />
        <rect x="0" y="140" rx="4" ry="4" width="140" height="10" />
      </ContentLoader>
      <ContentLoader width="320px" height="400px" viewBox="0 0 150 200">
        {/* Only SVG shapes */}
        <rect x="30" y="0" rx="5" ry="5" width="80" height="100" />
        <rect x="0" y="120" rx="4" ry="4" width="140" height="10" />
        <rect x="0" y="140" rx="3" ry="3" width="140" height="10" />
        <rect x="0" y="140" rx="2" ry="2" width="140" height="10" />
      </ContentLoader>
    </div>
  );
};

export default CardLoader;
