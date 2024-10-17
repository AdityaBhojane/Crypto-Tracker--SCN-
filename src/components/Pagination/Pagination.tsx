import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { usePaginationStore } from "@/zustandStore/store"
  
  export function PaginationDemo() {
    const page = usePaginationStore(state=> state.page)
    const setPage = usePaginationStore(state=> state.setPage)

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={()=>{
                if(page>1){
                    setPage(page-1)
                }
            }} href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={()=>{
                setPage(page+1)
            }}  href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  