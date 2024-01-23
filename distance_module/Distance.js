const feetToMeters = feet => feet*0.3048;
const metersToFeet = meters => meters*3.28084;
const milesToKm = miles => miles*1.60934;
const kmToMiles = km => km*0.62137;

exports.calculate = function(method, value)
{
    if(method=="feet"){
        return feetToMeters(value);}
    else if(method=="meters"){
        return metersToFeet(value);}
    else if(method=="miles"){
        return milesToKm(value);}
    else if(method=="km"){
        return kmToMiles(value);}
}