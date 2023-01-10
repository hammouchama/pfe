import React,{useState} from "react";

const PaginationContext = React.createContext();

const PaginationProvider = ({ children,total }) => {
  const [pagination, setPagination] = useState({
    limit: 10,
    total: total.length,
    start: 0,
    page: 1,
    perPage: 10,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false
  });
  
  return (
    <PaginationContext.Provider value={[pagination, setPagination]}>
      {children}   
    </PaginationContext.Provider>
  )
}