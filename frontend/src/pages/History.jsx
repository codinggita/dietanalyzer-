import { useState, useEffect } from 'react';
import progressService from '../services/progressService';
import useDebounce from '../hooks/useDebounce';
import { Search, Filter, ArrowUpDown, Trash2, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const History = () => {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [order, setOrder] = useState('desc');
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    fetchLogs();
  }, [debouncedSearch, sortBy, order, page]);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const data = await progressService.getLogs({ search: debouncedSearch, sortBy, order, page });
      setLogs(data.logs);
      setPages(data.pages);
    } catch (err) {
      console.error('Failed to fetch logs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this log?')) {
      try {
        await progressService.deleteLog(id);
        fetchLogs();
      } catch (err) {
        alert('Failed to delete log');
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
           <Calendar className="text-green-600" /> Progress History
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search weight..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border rounded-xl dark:border-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <select 
              className="bg-white dark:bg-gray-800 border rounded-xl px-4 py-2 dark:border-gray-700"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="weight">Sort by Weight</option>
            </select>
            <button 
              onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
              className="p-2 border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <ArrowUpDown size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Weight</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Calories</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Water</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Workout</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {loading ? (
                <tr><td colSpan="6" className="px-6 py-8 text-center text-gray-500">Loading history...</td></tr>
              ) : logs.length === 0 ? (
                <tr><td colSpan="6" className="px-6 py-8 text-center text-gray-500 italic">No logs found matching your criteria.</td></tr>
              ) : logs.map((log) => (
                <tr key={log._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{new Date(log.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 font-bold text-green-600 dark:text-green-400">{log.weight} kg</td>
                  <td className="px-6 py-4">{log.caloriesConsumed} kcal</td>
                  <td className="px-6 py-4">{log.waterIntake} L</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${log.workoutCompleted ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {log.workoutCompleted ? 'Done' : 'Missed'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleDelete(log._id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {pages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button 
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="p-2 border rounded-full disabled:opacity-30 hover:bg-gray-50 dark:border-gray-700"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-bold text-sm">Page {page} of {pages}</span>
          <button 
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
            className="p-2 border rounded-full disabled:opacity-30 hover:bg-gray-50 dark:border-gray-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default History;
