const httpError=(messsage,statusCode)=>{
    const error=new Error(messsage);
    error.statusCode=statusCode;
    return error;
};

module.exports=httpError;