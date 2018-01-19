class Austin{
constructor(projectName,owner,developer,address,zip,councilDistrict,Kirwan_Opportunity_Index,Distance_to_Bus_Stop,totalUnits,totalAffordableUnits,unitType,program,HousingType){
this.projectName = projectName;
this.owner = owner;
this.developer = developer;
this.address = address;
this.zip = zip;
this.councilDistrict = councilDistrict;
this.Kirwan_Opportunity_Index = Kirwan_Opportunity_Index;
this.Distance_to_Bus_Stop = Distance_to_Bus_Stop;
this.totalUnits = totalUnits;
this.totalAffordableUnits = totalAffordableUnits;
this.unitType = unitType;
this.program = program;
this.HousingType = HousingType;
}
}

class Seattle{
constructor(applicationNumber,permitType,address,description,category,actionType,workType,value,applicantName,applicantDate){
this.applicationNumber = applicationNumber;
this.permitType = permitType;
this.address = address;
this.description = description;
this.category = category;
this.actionType = actionType;
this.workType = workType;
this.value = value;
this.applicantName = applicantName;
this.applicantDate = applicantDate;
}      
}

class Chicago{
        constructor(CommunityAreaName,CommunityAreaNumber,PropertyType,PropertyName,Address,ZipCode,PhoneNumber,ManagementCompany,Units,Latitude,Longitude,Location,total){
                this.CommunityAreaName = CommunityAreaName;
                this.CommunityAreaNumber = CommunityAreaNumber;
                this.PropertyType = PropertyType;
                this.PropertyName = PropertyName;
                this.Address = Address;
                this.ZipCode = ZipCode;
                this.PhoneNumber = PhoneNumber;
                this.ManagementCompany = ManagementCompany;
                this.Units = Units;
                this.Latitude = Latitude;
                this.Longitude = Longitude;
                this.Location = Location;
                this.total = total;
        }
}

class NewYork{
constructor(schoolID, permitType, city, state, zip, phone, numOfSATTestTakers, sATCriticalReadingAvgScore, sATMathAvgScore, sATWritingAvgScore, program, unitType)
{
this.schoolID = schoolID;
this.permitType = permitType;
this.city = city;
this.state = state;
this.zip = state;
this.phone = phone;
this.numOfSATTestTakers = numOfSATTestTakers;
this.sATCriticalReadingAvgScore = sATCriticalReadingAvgScore;
this.sATMathAvgScore = sATMathAvgScore;
this.sATWritingAvgScore = sATWritingAvgScore;
this.program = program;
this.unitType = unitType;
}

}

class Connecticut{
        constructor(OBJECTID,Parcel_ID,Year,Category,Status,Location,StreetNum,StreetName,Owner,MailingAddress,City,State,ZipCode,LUC,PropType,UnitCount,geom)
        {
                this.OBJECTID = OBJECTID;
                this.Parcel_ID = Parcel_ID;
                this.Year = Year;
                this.Category = Category;
                this.Status = Status;
                this.Location = Location;
                this.StreetNum = StreetNum;
                this.StreetName = StreetName;
                this.Owner = Owner;
                this.MailingAddress = MailingAddress;
                this.City = City;
                this.State = State;
                this.ZipCode = ZipCode;
                this.LUC = LUC;
                this.PropType = PropType;
                this.UnitCount = UnitCount;
                this.geom = geom;
                
        }
}