


function Nutrition() {
  return (
    <div className="px-6 sm:px-0">
        <h3 className="text-2xl font-bold text-brown800 font-Young_Serif mb-5">Nutrition</h3>
        <p className="text-base text-stone800">The table below shows nutritional values per serving without the additional fillings.</p>
        

        <table className="w-full">
            <tr className="  border-b border-stone150 "> 
                <td className="text-sm text-stone800 p-3 pl-5">Calories </td>
             <td className="text-sm text-brown800 font-semibold p-3">277kcal </td></tr>
            <tr  className="  border-b border-stone150 "> <td className="text-sm text-stone800 p-3 pl-5">Carbs </td>
             <td className="text-sm text-brown800 font-semibold p-3">0g </td></tr>
            <tr  className="  border-b border-stone150 "> <td className="text-sm text-stone800 p-3 pl-5">Protein </td> 
            <td className="text-sm text-brown800 font-semibold p-3 ">20g </td></tr>
            <tr > <td className="text-sm text-stone800 p-3 pl-5">Fat </td> 
            <td className="text-sm text-brown800 font-semibold p-3">22g</td></tr>
        </table>
    </div>
  )
}

export default Nutrition