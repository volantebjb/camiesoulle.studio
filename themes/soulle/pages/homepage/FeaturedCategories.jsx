import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="/men-banner.jpg" alt="Dress" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            DRESS
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="/women-banner.jpg" alt="Blouse" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            BLOUSE
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <img src="/kid-banner.jpg" alt="Skirt" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="#">
            SKIRT
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
