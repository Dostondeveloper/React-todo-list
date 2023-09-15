const Card = ({ jumanazar, pri, selectVal}) => {
  const style = () => {
    if (pri === "low") return "green";
    else if (pri === "normal") return "orange";
    else if (pri === "high") return "red";
  };

  return (
    <div style={{backgroundColor: style()}} className="w-full bg-white shadow-lg rounded-lg p-3 flex items-center justify-between">
        <p className="text-[18px]">{jumanazar}</p>
        <p className="text-[15px] text-gray-600">{pri}</p>
    </div>
  )
}

export default Card