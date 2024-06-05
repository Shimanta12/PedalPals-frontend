const Overview = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-800 text-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Bicycle Inventory</h2>
          <p>Total Bicycles: 120</p>
          <p>Mountain: 30</p>
          <p>Road: 25</p>
          <p>Hybrid: 40</p>
          <p>Electric: 25</p>
        </div>

        <div className="bg-gray-200 shadow-lg rounded-lg p-6 col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Sales Performance</h2>
          <p>Daily Sales: $2000</p>
          <p>Weekly Sales: $14,000</p>
          <p>Monthly Sales: $60,000</p>
          <p>Top-Selling Model: Electric Commuter</p>
        </div>

        <div className="bg-slate-800 text-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Customer Insights</h2>
          <p>Total Customers: 500</p>
          <p>New Customers: 50</p>
          <p>Returning Customers: 450</p>
          <p>Top Location: Chattogram</p>
        </div>

        <div className="bg-gray-200 shadow-lg rounded-lg p-6 col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">
            Service and Maintenance Requests
          </h2>
          <p>Total Requests: 80</p>
          <p>Pending: 10</p>
          <p>In Progress: 20</p>
          <p>Completed: 50</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
