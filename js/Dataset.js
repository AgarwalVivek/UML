class Dataset{
	constructor(){
		this.dataFrame = dfjs.DataFrame;
	}
	
	getDataFrame(){
		return this.dataFrame;
	}
	
	fetch(){
		//let DataFrame = dfjs.DataFrame;
		//schoolProfileInfoObjArr = new Array();
		var vals = document.getElementById("datasets");
		presentLoadedData = vals.options[vals.selectedIndex].value;
		this.dataFrame.fromCSV(presentLoadedData).then(df => 
		{
			var data = df.toJSON('HousingJSON.json');        
			export_data(data);
		});
	}


	export_data(dataset){
		var blob= new Blob([data],{ type:"text/ApplicationJson;charset:utf-8" });
			//saveAs(blob,"sat.json");
		
		dataDisplayArea = dataset;
		createTableFromJSON();
	}
}