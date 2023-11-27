const trycatchmiddleware = (trycatchhandler) => {
    return async (req, res, next) => {
      try {
        await trycatchhandler(req, res, next);
      } catch (error) {
       console.log(error);
       
      }
    };
  };
  
 module.exports=trycatchmiddleware
