// components/Pagination.tsx
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center p-6 border-t">
      <div className="flex items-center gap-1">
        <Button
          variant="default"
          onClick={goToPreviousPage}
          // disabled={currentPage === 1}
          className="h-12 w-8 "
        >
          <MdOutlineArrowBackIosNew className="size-10 text-primaryColor" />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(
            (page) =>
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
          )
          .map((page, index, array) => (
            <React.Fragment key={page}>
              {index > 0 && array[index - 1] !== page - 1 && (
                <span className="px-2">...</span>
              )}
              <Button
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => onPageChange(page)}
                className={`h-12 w-6 flex items-center ${
                  currentPage === page
                    ? " bg-primaryColor border-2 border-primaryColor text-white rounded-xl"
                    : "bg-white text-black border-2 border-primaryColor rounded-xl"
                }`}
              >
                {page}
              </Button>
            </React.Fragment>
          ))}

        <Button
          variant="default"
          onClick={goToNextPage}
          // disabled={currentPage === 1}
          className="h-12 w-8 "
        >
          <MdOutlineArrowForwardIos className="size-10 text-primaryColor" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
