import range from"lodash/range";export const SHOW_ALL_PAGES="All";export function getVisiblePages(page,totalPages){const currentPage=page+1;return totalPages<=7?range(1,totalPages+1):currentPage<5?[...range(1,6),totalPages]:currentPage+5-1>totalPages?[1,...range(totalPages-5+2,totalPages+1)]:[1,...range(currentPage-2,currentPage+5-2),totalPages]}