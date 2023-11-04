import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Free Shipping</h2>
          <p>Get Free Shipping for every three orders.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Our Promise</h2>
          <p>Thoughtfully handpicked pieces for you.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Soulle Colors</h2>
          <p>Warm, earthy space.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
