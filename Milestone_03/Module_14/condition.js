// Multi_level condition

const Shopping = 3000 ;

if (Shopping >=5000){
    const discount = Shopping * 20 /100 ;
    const payment = Shopping - discount ;
    console.log("Total Payment :"+payment , "Tk");
}
else if (Shopping >=3000){
    const discount = Shopping * 10 /100 ;
    const payment = Shopping - discount ;
    console.log("Total Payment :"+payment , "Tk");
}
else{
    console.log ("Withoust discount pay"+ Shopping , "Tk");
}
