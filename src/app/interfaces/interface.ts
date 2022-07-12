export interface HomePage{
  data:{
    id:number;
    attributes:{
      name:string;
      jbt:string;
      Description:string;
      bannerimage:{
          data:{
            attributes:{
              formats:{
                thubanil:{
                  width:number;
                  height:number;
                  url:string;
                }
              }
            }
          }
      }
    }
  }

}
