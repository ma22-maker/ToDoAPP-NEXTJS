import React from 'react'
function prioritySorting(priority: any) {
    switch (priority) {
      case "High":
        return 3;
      case "Medium":
        return 2;
      case "Low":
        return 1;
      case "NO Priority":
        return 0;
      default:
        return 0;
    }
  }

  

  export default prioritySorting