export interface Actions {
    type : string
    payload : todoItem
  }
  
  export interface todoItem {
      id? : number
      title : string
      compeleted? : boolean
  }
  