import axios from "axios"


//Modelos de Account

class userInfo{
	constructor(realName, userName, email, phoneNumber){
		this.realName = realName
		this.userName = userName
		this.email = email
		this.phoneNumber = phoneNumber
	}
}

class newPassword{
	constructor(oldPasswordSHA256, newPassword){
		this.oldPasswordSHA256 = oldPasswordSHA256
		this.newPassword = newPassword
	}
}


//Modelos de Firmware

class newFirmwareInfo{
	constructor(name, notes, version, firmwareGroup, pinActionTypeSupport){
		this.name = name
		this.notes = notes
		this.version = version
		this.firmwareGroup = firmwareGroup
		this.pinActionTypeSupport = pinActionTypeSupport
	}
}

class firmwareNewInfo{
	constructor(name, notes, version, firmwareGroup, requiredFeatures, supportedFeatures, compiledFor, pinActionTypeSupport){
		this.name = name
		this.notes = notes
		this.version = version
		this.firmwareGroup = firmwareGroup
		this.requiredFeatures = requiredFeatures
		this.supportedFeatures = supportedFeatures
		this.compiledFor = compiledFor
		this.pinActionTypeSupport = pinActionTypeSupport
	}
}


//Modelos para Identity

class newAccountInfo{
	constructor(realName, userName, email, phoneNumber, password){
		this.realName = realName
		this.userName = userName
		this.email = email
		this.phoneNumber = phoneNumber
		this.password = password
	}
}

class loginData{
	constructor(identifier, passwordSHA256){
		this.identifier = identifier
		this.passwordSHA256 = passwordSHA256
	}
}


//Modelos para subServer

class newAcuaponiaSubServerInfo{
	constructor(name){
		this.name = name
	}
}


//Modelos para SubServerDevice

class subServerDeviceNewInfo{
	constructor(name, notes, hardwareTypes, hardwareFeatures, hardwareArchitecture, connectionType, connectionSlot, assignedFirmwareId){
		this.name = name
		this.notes = notes
		this.hardwareTypes = hardwareTypes
		this.hardwareFeatures = hardwareFeatures
		this.hardwareArchitecture = hardwareArchitecture
		this.connectionType = connectionType
		this.connectionSlot = connectionSlot
		this.assignedFirmwareId = assignedFirmwareId
	}
}


//Modelos para subServerDevicePeripheral

class newPeripheralInfo{
	constructor(subServerId, pins, name, actionType, scheduledDelay, reportValueKind){
		this.subServerId = subServerId
		this.pins = pins
		this.name = name
		this.actionType = actionType
		this.scheduledDelay = scheduledDelay
		this.reportValueKind = reportValueKind
	}
}

class peripheralNewInfo{
	constructor(pins, )
}


//Modulos

class mainServerClientAccountModule{
	constructor(mainServerClient){
		this.mainServerClient = mainServerClient
	}

	getSelfUserInfo(){
		return this.mainServerClient.httpGet(`api/app/accounts`)
	}

	getUserInfo(userKey){
		return this.mainServerClient.httpGet(`api/app/accounts/${userKey}`)
	}

	updateUser(userKey, data){
		return this.mainServerClient.httpPatch(`api/app/accounts/${userKey}`, data)
	}

	deleteSelfUserAccount(){
		return this.mainServerClient.httpDelete('api/app/accounts')
	}

	deleteUserAccount(userKey){
		return this.mainServerClient.httpDelete(`api/app/accounts/${userKey}`)
	}

	updatePassword(data){
		return this.mainServerClient.httpPatch('api/app/accounts/password', data)
	}
}

class mainServerClientFirmwareModule{
	constructor(mainServerClient){
		this.mainServerClient = mainServerClient
	}

	downloadFirmwareBinary(firmwareId){
		return this.mainServerClient.httpGet(`api/app/firmwares/${firmwareId}/bin`)
	}

	uploadFirmwareBinary(firmwareId, file){
		return this.mainServerClient.httpPost(`api/app/firmwares/${firmwareId}/bin`, file)
	}

	getAllFirmwares(){
		return this.mainServerClient.httpGet(`api/app/firmwares`)
	}

	createFirmwareInfo(file){
		return this.mainServerClient.httpPost(`api/app/firmwares`, file)
	}

	deleteFirmwareInfo(){
		return this.mainServerClient.httpDelete(`api/app/firmwares`)
	}

	getFirmwareInfo(firmwareId){
		return this.mainServerClient.httpGet(`api/app/firmwares/${firmwareId}`)
	}

	updateFirmwareInfo(firmwareId){
		return this.mainServerClient.httpPatch(`api/app/firmwares/${firmwareId}`)
	}

	deleteFirmwareInfo(firmwareId){
		return this.mainServerClient.httpDelete(`api/app/firmwares/${firmwareId}`)
	}
}

class mainServerClientIdentityModule{
	constructor(mainServerClient){
		mainServerClient = this.mainServerClient
	}

	createAccount(data){
		return this.mainServerClient.httpPost('api/app/identity', data)
	}

	login(data){
		return this.mainServerClient.httpPatch('api/app/identity', data)
	}

	logout(){
		return this.mainServerClient.httpDelete('api/app/identity')
	}
}

class mainServerClientSubServerModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getAllAcuaponiaSubServers(){
		return this.mainServerClient.httpGet('api/app/subservers')
	}

	getAcuaponiaSubServerInfo(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}`)
	}

	updateAcuaponiaSubServerInfo(subServerId, data){
		return this.mainServerClient.httpPatch(`api/app/subservers/${subServerId}`, data)
	}
}

class mainServerClientSubServerDevicesModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getAllDevices(){
		return this.mainServerClient.httpGet('api/app/devices')
	}

	updateSubServerDeviceInfo(data){
		return this.mainServerClient.httpPatch('api/app/devices', data)
	}
}

class mainServerClientSubServerDevicesPeripheralModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getPinActionTypeFormData(){
		return this.mainServerClient.httpGet('api/app/devices/peripherals')
	}

	addPeripheral(data){
		return this.mainServerClient.httpPost('api/app/devices/peripherals', data)
	}

	getPeripheralForDevice(deviceId){
		return this.mainServerClient.httpGet(`api/app/devices/peripherals/${deviceId}`)
	}

	updatePeripheral(deviceId, peripheralIndex){			//revisar, no se si en este se sube algun archivo
		return this.mainServerClient.httpPatch(`api/app/devices/peripherals/${deviceId}/${peripheralIndex}`)
	}

	deletePeripheral(deviceId, peripheralIndex){
		return this.mainServerClient.httpDelete(`api/app/devices/peripherals/${deviceId}/${peripheralIndex}`)
	}
}

class mainServerClientSubServerReactorModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getSchemasForAviableAcuaponiaSubServerReactors(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}/reactors`)
	}

	getAllAcuaponiaSubServersReactorConfigurations(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}/reactors/config`)
	}

	createAcuaponiaSubServerReactorConfiguration(subServerId, data){
		return this.mainServerClient.httpPost(`api/app/subservers/${subServerId}/reactors/config`, data)
	}

	getAllAcuaponiaSubServerReactorConfigurationInfo(subServerId, reactorConfigId){
		return this.mainServerClient.httpGet(`api/app/subservers/${subServerId}/reactors/config/${reactorConfigId}`)
	}

	updateAcuaponiaSubServerReactorConfigurationInfo(subServerId, reactorConfigId, data){
		return this.mainServerClient.httpPatch(`api/app/subservers/${subServerId}/reactors/config/${reactorConfigId}`, data)
	}
}

class mainServerClientSubServerReportModule{
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

class mainServerClientSubServerSessionModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	deleteSubServerSession(subServerId){
		return this.mainServerClient.httpDelete(`api/app/subservers/sessions/${subServerId}`)
	}

	getSubServerSessions(subServerId){
		return this.mainServerClient.httpGet(`api/app/subservers/sessions/${subServerId}`)
	}

	rejectSubServerSession(subServerId){
		return this.mainServerClient.httpPatch(`api/app/subservers/sessions/${subServerId}/reject`)
	}

	aproveSubServerSession(subServerId, data){
		return this.mainServerClient.httpPatch(`api/app/subservers/sessions/${subServerId}/approve`, data)
	}

	getSubServerSessions(){
		return this.mainServerClient.httpGet('api/app/subservers/sessions')
	}
}

class mainServerClientSubServerUserAccessModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getUserAccess(userId){
		return this.mainServerClient.httpGet(`api/app/permissions/access/user/${userId}`)
	}

	getSubServerAccesses(subServerId){
		return this.mainServerClient.httpGet(`api/app/permissions/access/subserver/${subServerId}`)
	}

	editSubUserAccess(subServerId, userId, data){
		return this.mainServerClient.httpPatch(`api/app/permissions/access/${subServerId}/${userId}`, data)
	}

	revokeSubServerAccess(subServerId, userId){
		return this.mainServerClient.httpDelete(`api/app/permissions/access/${subServerId}/${userId}`, data)
	}

	grantSubServerAccess(data){
		return this.mainServerClient.httpPost('api/app/permissions/access/access', data)
	}
}

class mainServerClientUserNotificationsModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	getAllNotifications(){
		return this.mainServerClient.httpGet('api/app/notifications')
	}

	markAsSeen(data){
		return this.mainServerClient.httpPatch('api/app/notifications', data)
	}
}

class mainServerClientUserPermissionsModule{
	constructor(mainServerClient){
		mainServerClient: this.mainServerClient
	}

	adjustUserPermissions(otherUserId){		//no se si esto lleva data o que
		return this.mainServerClient.httpPatch(`api/app/permissions/${otherUserId}`)
	}
}


//main

class mainServerClient{
	//El httpErrorHandler es una funcion como la que le paso al then y catch
	//de axios y recibe un solo parametro que se llama errorResponse.
	constructor(loginData, serverUrl, httpErrorHandler){
		this.loginData = identifier,
		this.serverUrl = serverUrl,
		this.httpErrorHandler = httpErrorHandler,
		this.accounts = new mainServerClientAccountModule(this)
	}

	let isLoggedIn = false

	composeUrl(endPoint){
		return `${this.serverUrl}/${endPoint}`
	}

	httpGet(endPoint){
		let res
		axios.get(composeUrl(endPoint))
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.get(composeUrl(endPoint))
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpDelete(endPoint){
		let res
		axios.delete(composeUrl(endPoint))
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.delete(composeUrl(endPoint))
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpPost(endPoint, data){
		let res
		axios.post(composeUrl(endPoint), data)
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.post(composeUrl(endPoint), data)
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpPatch(endPoint, data){
		let res
		axios.patch(composeUrl(endPoint), data)
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status = 401){
				ensureLoggedIn()
				axios.patch(composeUrl(endPoint), data)
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	httpPut(endPoint, data){
		let res
		axios.put(composeUrl(endPoint), data)
		.then((httpRes) => res = httpRes.data)
		.catch((err) => {
			if(err.status == 401){
				ensureLoggedIn()
				axios.put(composeUrl(endPoint), data)
				.then((httpRes) => res = httpRes.data)
				.catch((err) => {
					this.httpErrorHandler(err)
					res = false
				})
			}else{
				this.httpErrorHandler(err)
				res = false
			}
		})
		return res
	}

	ensureLoggedIn(){
		if(isLoggedIn == true){
			return 
		}else{
			//Aqui me loggeo con login data y pongo isLoggedIn verdadero
		}
	}
}