'use client';

interface FilterState {
  region: string;
  category: string;
}

interface FilterBarProps {
  onFilterChange: (type: keyof FilterState, value: string) => void;
  filters: FilterState;
}

const regions = ['All Regions', 'Asia', 'Europe', 'Africa', 'North America', 'South America'];
const categories = ['All Categories', 'Beach', 'Mountain', 'City', 'Adventure', 'Cultural'];

export default function FilterBar({ onFilterChange, filters }: FilterBarProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2 font-serif">
            Filter by Region
          </label>
          <select
            value={filters.region}
            onChange={(e) => onFilterChange('region', e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-serif text-gray-900"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2 font-serif">
            Filter by Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-serif text-gray-900"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}