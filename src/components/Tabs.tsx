const Tabs = ({ tabs, activeTab, onChangetab }: any) => (
  <div className="m-auto ml-0 w-full pt-2">
    <div className="flex  border-gray-300 w-full">
      {tabs.map((tab: any, index: number) => (
        <button
          key={index}
          className={`
          border-b-2 flex-1 text-gray-700 font-medium p-5
          ${activeTab === tab ? "border-purple-500 border-b-4" : ""}`}
          onClick={() => onChangetab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
);

export default Tabs;