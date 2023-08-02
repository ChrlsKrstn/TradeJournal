import FormInput from "../../components/form-input/form-input.component";

const Journal = () => {
    return (
        <> 
            <h1 className="mb-2 text-3xl font-bold">Trading Journal</h1>
            <div className="flex">
                <div className="grid grid-cols-12 flex-grow">
                    <div className="col-span-6">
                        <FormInput
                            label="Strategy"
                            type="text"
                            className="block w-4/5 rounded-md"
                        /> 
                        <FormInput
                            label="Preffered View"
                            type="text"
                            className="block w-4/5 rounded-md"
                        /> 
                        <FormInput
                            label="Target Pips/Trade"
                            type="text"
                            className="block w-4/5 rounded-md"
                        /> 
                            <h1 className="mt-8 mb-2 text-2xl font-bold">Pair Summary</h1>
                            <FormInput
                                label="Most Traded Pair"
                                type="text"
                                className="block w-4/5 rounded-md"
                                disabled
                            /> 
                            <FormInput
                                label="Least Traded Pair"
                                type="text"
                                className="block w-4/5 rounded-md"
                                disabled
                            /> 
                    </div>
                    <div className="col-span-6">
                        <FormInput
                            label="Working Balance"
                            type="text"
                            className="block w-4/5 rounded-md"
                        /> 
                        <FormInput
                            label="Risk Tolerance"
                            type="text"
                            className="block w-4/5 rounded-md"
                        /> 
                        <FormInput
                            label="Max Exposure"
                            type="text"
                            className="block w-4/5 rounded-md"
                        /> 
                        </div>
                </div> 
                
            </div>
            <table className="border-collapse border border-slate-400 ...">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th className="border border-slate-300 ...">Total Trades</th>
                        <th className="border border-slate-300 ...">Wins</th>
                        <th className="border border-slate-300 ...">Loss</th>
                        <th className="border border-slate-300 ...">Win Rate (By Pair)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-300 ...">Indiana</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300 ...">Ohio</td>
                        <td className="border border-slate-300 ...">Columbus</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-300 ...">Michigan</td>
                        <td className="border border-slate-300 ...">Detroit</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                        <td className="border border-slate-300 ...">Indianapolis</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Journal;