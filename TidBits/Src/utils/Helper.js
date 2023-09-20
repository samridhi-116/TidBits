export function filterData(searchInput, restraunts){
    const filterRestraunts = restraunts?.filter((RestrauntCard) =>
      RestrauntCard.info.name?.includes(searchInput) || RestrauntCard.info.cuisines?.includes(searchInput)
 );
 return filterRestraunts;
}