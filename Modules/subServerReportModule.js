//Modulo Report

export class mainServerClientSubServerReportModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getReports(){
		return this.mainServerClient.httpGet('api/app/reports')
	}

	createManualSubServerReports(data){
		return this.mainServerClient.httpPost('api/app/reports', data)
	}

	updateSubServerReportInfo(reportId, data){
		return this.mainServerClient.httpPatch(`api/app/reports/${reportId}`)
	}
}