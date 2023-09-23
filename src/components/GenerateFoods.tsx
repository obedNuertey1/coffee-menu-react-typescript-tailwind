// How the foodstuffs object should be
namespace Foods{
  export interface Ifoodstuff<T>{
    name: String;
    price: T;
  }
    
  export class GenerateFoods <U extends Ifoodstuff<String>>{
    private listOfFoodStuffs: U[];
  
    constructor(listOffFoodStuffs: U[]){
      this.listOfFoodStuffs = listOffFoodStuffs;
    };
  
    public generateFoods():JSX.Element[]{
      return this.listOfFoodStuffs.map((elem:U)=>{
        return (
          <article className="block">
            <p className="mt-1 mb-1 text-left inline-block w-1/2">{elem.name}</p><p className="mt-1 mb-1 text-right inline-block w-1/2">{elem.price}</p>
          </article>
        );
      }); 
    }
  };
};

export default Foods;