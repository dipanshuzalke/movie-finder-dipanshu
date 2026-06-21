import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MoviesPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function MoviesPagination({
  currentPage,
  totalPages,
}: MoviesPaginationProps) {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <PaginationPrevious href={`/?page=${currentPage - 1}`} />
          ) : (
            <span className="pointer-events-none opacity-50">Previous</span>
          )}
        </PaginationItem>

        <PaginationItem>
          <span className="px-4 text-sm font-medium">Page {currentPage}</span>
        </PaginationItem>

        <PaginationItem>
          {currentPage < totalPages ? (
            <PaginationNext href={`/?page=${currentPage + 1}`} />
          ) : (
            <span className="pointer-events-none opacity-50">Next</span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
