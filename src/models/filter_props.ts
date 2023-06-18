export default interface FilterProps {
    filter: string;
    setFilter: (val: string) => void;
    defaultStations: string[];
    stations: string[];
    filteredStations: string[];
    setFilteredStations: (val: string[]) => void;
}